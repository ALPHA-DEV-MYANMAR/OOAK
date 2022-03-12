<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use App\Http\Resources\OrderResponse;
use Illuminate\Http\Request;
use App\library\CusResponse;
use App\Models\Order;
use App\Models\Good;
use App\Models\Price;
use App\Models\PromoCode;
use App\Models\Photo;
use App\Models\Cart;
use App\library\OrderLibrary;
use Log;


use function PHPUnit\Framework\isEmpty;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        $this->order_lib = new OrderLibrary();
        auth()->setDefaultDriver('api');
        $this->withArray = array(
            'user.address.state', 'photo', 'status', 'items.price.good', 'logs.status', 'delivery_agent', 'summary', 'delivery_accept_time', 'payment_method', 'promo'
        );
    }
    public function index()
    {
        $user = request()->user();
        if ($user !== null) {
            $orders = Order::where('user_id', $user->id)->with($this->withArray)->orderBy('id', 'desc')->get();
            $orders = collect($orders)->map(function ($q) {
                $q->delivery_tracking_id = $q->delivery_tracking_code;
                return $q;
            });
            $data = array(
                'data' => $orders
            );

            return $this->res->output(true, 'success', $data, null);
        }
        return $this->res->output(false, 'User not found', null, null);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function validateOrder($user)
    {
        $data = array(
            'prices' => array(),
            'status' => true
        );
        $carts = Cart::where('user_id', $user->id)->get();
        foreach ($carts as $c) {
            $price_id = $c->price_id;
            $qty = $c->qty;
            $price = Price::find($price_id);
            //check qty is avalible , or not return false
            if ($price !== null) {
                if ($qty > $price->quantity) {
                    array_push($data['prices'], $price_id);
                    $data['status'] = false;
                }
                //pricec id is off shop
                $good = Good::where('id', $price->good_id)->first();
                if ($good->onshop_flag == '0') {
                    $data['status'] = false;
                }
            }
        }
        return $data;
    }
    public function store(orderRequest $request)
    {

        $user = request()->user();
        if ($user !== null) {
            //check order validate
            $orderValidate = $this->validateOrder($user);

            if ($orderValidate['status']) {
                if ($request->promo_code_id != null) {
                    $promo = PromoCode::find($request->promo_code_id);
                    if ($promo !== null) {
                        if ($this->CheckUserPromo($user, $promo)) {
                            $this->usePromoCode($user, $promo);
                        } else {
                            $request->merge(['promo_code_id' => null]);
                        }
                    }
                }
                $request->merge(['user_id' => $user->id]);
                if ($request->photo_id == null) {
                    $request->query->set('photo_id', 0);
                }

                $order = new Order;
                $order->fill($request->all());
                $order->save();

                $order = Order::find($order->id);
                $order->order_id = $this->generateOrderId($order->id);
                if ($request->hasFile('photo')) {
                    $photo = new Photo;
                    $p = $request->file('photo')->store('payment_slip');
                    $photo->name = $p;
                    if ($photo->save()) {
                        $order->photo_id = $photo->id;
                    }
                }

                if($order->save()){
                    event(new \App\Events\OrderReceived($user, $order));
                    $orderwithAttach = $this->attachData($order);
                    //sent email
                    $orderwithAttach = new OrderResponse($orderwithAttach);
                    Log::info("{$user->name} ordered {$order->order_id}");
                    return $this->res->output(true, 'Successfully created', $orderwithAttach, null);
                }
                

                
            } else {
                $orderValidate['prices'];
                $prices = Price::whereIn('id', $orderValidate['prices'])->get();
                $good = '';
                foreach ($prices as $p) {
                    $good .= ' ' . $p->good->name;
                }
                $message = "အော်ဒါမှာယူမှု မအောင်မြင်ပါ။ သင်မှာယူလိုသော {$good} မှာ သင်မှာယူလိုသည့် အရအတွက် မရှိတော့ပါသဖြင့် ကျေးဇူးပြု၍ ပြန်လည်ပြန်ဆင်ပြီး ထပ်မံ အော်ဒါတင်ပေးပါရန်";
                return $this->res->output(true, $message, null, null);
            }
        }
        return $this->res->output(false, 'User not found', null, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::find($id);

        if ($order !== null) {
            $order = $this->attachData($order);
            $order = new OrderResponse($order);
            return $this->res->output(true, 'Success', $order, null);
        } else {
            return $this->res->output(false, 'Order not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if ($request->photo_id == null) {
            $request->query->set('photo_id', 0);
        }
        $user =  $request->user();
        if ($user !== null) {
            $request->merge(['user_id' => $user->id]);

            $order = Order::find($id);
            if ($order->order_status_id == 4 && $order->order_status_id == 5) {
                $request->merge(['order_status_id' => $order->order_status_id]);
            }
            $order->fill($request->all());
            $order->save();
            $this->order_lib->saveLog($order->id, 2);

            if ($request->hasFile('photo')) {
                $photo = new Photo;
                $p = $request->file('photo')->store('payment_slip');
                $photo->name = $p;
                if ($photo->save()) {
                    $order->photo_id = $photo->id;
                }
            }

            $order = $this->attachData($order);

            if ($request->promo_code_id != null) {
                $promo = PromoCode::find($request->promo_code_id);
                if ($promo !== null) {
                    if ($this->CheckUserPromo($user, $promo)) {
                        $this->usePromoCode($user, $promo);
                    }
                }
            }

            if ($order->photo != null) {
                if ($request->order_status_id < 4) {
                    $photo = Photo::find($order->photo->id);
                    event(new \App\Events\PaymentReceived($user, $order, $photo));
                    Log::info("{$user->name} payment slip uploaded for order {$order->order_id}");

                }
            }


            if ($request->order_status_id == '4') {
                event(new \App\Events\Shipped($user, $order));
            }
            if ($request->order_status_id == '6') {
                event(new \App\Events\ChangeOrderStatus($order));
                event(new \App\Events\OrderCancel($user, $order));
                Log::info("{$user->name} canceled for order {$order->order_id}");

            }
            $order = new OrderResponse($order);
            return $this->res->output(true, 'Successfully Updated', $order, null);
        }
        return $this->res->output(false, 'User not found', null, null);
    }



    public function attachData($order)
    {
        $order->load($this->withArray);
        return $order;
    }

    public function generateOrderId($id)
    {
        $number = 'OAK-' . $id;
        for ($i = 0; $i < 3; $i++) {
            $number = $number . '-' . rand(1000, 9999);
        }
        return $number;
    }

    public function  CheckUserPromo($user, $promo)
    {
        $avaliable_to_use = true;
        $count = $promo->count;
        $used = $promo->used;
        if ($count > $used) {
            $users_promos = $user->promos;
            foreach ($users_promos as $p) {
                if ($p->id == $promo->id) {
                    $avaliable_to_use = false;
                }
            }
        } else {
            $avaliable_to_use = false;
        }
        return $avaliable_to_use;
    }
    public function usePromoCode($user, $promo)
    {
        $promo = PromoCode::find($promo->id);
        if ($promo !== null) {
            $promo->used = $promo->used + 1;
            $promo->save();
            $user->promos()->attach($promo);
        }
    }
}
