<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use App\Http\Resources\OrderResponse;
use Illuminate\Http\Request;
use App\library\CusResponse;
use App\Models\Order;
use App\library\OrderLibrary;
use App\Models\User;
use App\Models\OrderLog;
use App\Models\PromoCode;
use App\Models\Photo;
use App\Models\OrderStatus;
use Carbon\Carbon;
use DB;

use function PHPUnit\Framework\isEmpty;

class AdminOrderController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        $this->order_lib = new OrderLibrary();
        auth()->setDefaultDriver('api');
        $this->withArray = array(
            'items', 'user.address.state', 'photo', 'status', 'items.price.good', 'logs.status', 'delivery_agent', 'delivery_accept_time', 'payment_method', 'promo', 'summary'
        );
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $per_page = request()->per_page ? request()->per_page : 15;
        $orderBy = request()->orderBy ? request()->orderBy : 'id';
        $sorting = request()->sorting ? request()->sorting : 'desc';
        $user_id = request()->user_id ? request()->user_id : null;
        $status = request()->status ? request()->status : 'all';
        $from = request()->from ? request()->from : 'all';
        $to = request()->to ? request()->to : 'all';
        $today = request()->today ? request()->today : 'no';
        $yesterday = request()->yesterday ? request()->yesterday : 'no';
        $this_month = request()->this_month ? request()->this_month : 'no';
        $last_month = request()->last_month ? request()->last_month : 'no';
        $this_year = request()->this_year ? request()->this_year : 'no';
        $last_year = request()->last_year ? request()->last_year : 'no';
        $orders = Order::with($this->withArray);
        $order_status = OrderStatus::select('id', 'name')->get();
        $data = collect($order_status)->map(function ($q) {
            $q->count = 0;
            return $q;
        })->toArray();
        $counts = $data;
        if ($user_id !== null) {
            $orders = $orders->where('user_id', $user_id);
            // $counts = $counts->where('user_id', $user_id);
        }
        if ($status != 'all') {
            $orders = $orders->where('order_status_id', $status);
        }
        if ($today == 'yes') {
            $today = Carbon::now();
            $orders = $orders->whereDate('created_at',  $today);
            $counts = $this->parseData($data, $this->getOrderSummaryQuery()->whereDate('orders.created_at', Carbon::now())->get());
        }
        
        if ($yesterday == 'yes') {
            $yesterday = Carbon::now()->subDay();
            $orders = $orders->whereDate('created_at',   $yesterday);
            $counts = $this->parseData($data, $this->getOrderSummaryQuery()->whereDate('orders.created_at', Carbon::now()->subDay())->get());
        }

        if ($this_month == 'yes') {
            $month = Carbon::now();
            $orders = $orders->whereMonth('created_at',  $month);
            $counts = $this->parseData($data, $this->getOrderSummaryQuery()->whereMonth('orders.created_at', Carbon::now())->get());
        }
        if ($last_month == 'yes') {
            $month = Carbon::now()->subMonth();
            $orders = $orders->whereMonth('created_at',  $month);
            $counts = $this->parseData($data, $this->getOrderSummaryQuery()->whereMonth('orders.created_at', Carbon::now()->subMonth())->get());
        }
        if ($this_year == 'yes') {
            $year = Carbon::now();
            $orders = $orders->whereYear('created_at',  $year);
            $counts = $this->parseData($data, $this->getOrderSummaryQuery()->whereYear('orders.created_at', Carbon::now())->get());
        }
        if ($last_year == 'yes') {
            $year = Carbon::now()->subYear();
            $orders = $orders->whereYear('created_at',  $year);
            $counts = $this->parseData($data, $this->getOrderSummaryQuery()->whereYear('orders.created_at', Carbon::now()->subYear())->get());
        }
        if ($today == 'no' && $yesterday == 'no' && $this_month == 'no'  && $last_month == 'no' && $this_year == 'no' && $last_year == 'no') {
            if ($from != 'all') {
                $from = Carbon::parse($from);
                $orders = $orders->whereDate('created_at', '>=', $from);
                $counts =  $this->parseData($data, $this->getOrderSummaryQuery()->whereYear('orders.created_at', $from))->get();
            }
            if ($to != 'all') {
                $to = Carbon::parse($to);
                $orders = $orders->whereDate('created_at', '<=', $to);
                $counts = $this->parseData($data, $this->getOrderSummaryQuery()->get());
            }
        }

        $orders = $orders->orderBy($orderBy, $sorting);
        $orders = $orders->paginate($per_page);
        
        $data = array(
            'counts' => $counts,
            'data' => $orders
        );
        return $this->res->output(true, 'success', $data, null);
    }

    public function summaryCount()
    {
        $counts = array();
        $status = OrderStatus::select('id', 'name')->get();
        $data = collect($status)->map(function ($q) {
            $q->count = 0;
            return $q;
        })->toArray();

        $counts['today'] = $this->parseData($data, $this->getOrderSummaryQuery()->whereDate('orders.created_at', Carbon::now())->get());
        $counts['yesterday'] = $this->parseData($data, $this->getOrderSummaryQuery()->whereDate('orders.created_at', Carbon::now()->subDay())->get());
        $counts['this_month'] = $this->parseData($data, $this->getOrderSummaryQuery()->whereMonth('orders.created_at', Carbon::now())->get());
        $counts['last_month'] =  $this->parseData($data, $this->getOrderSummaryQuery()->whereMonth('orders.created_at', Carbon::now()->subMonth())->get());
        $counts['this_year'] =  $this->parseData($data, $this->getOrderSummaryQuery()->whereYear('orders.created_at', Carbon::now())->get());
        $counts['last_year'] =  $this->parseData($data, $this->getOrderSummaryQuery()->whereYear('orders.created_at', Carbon::now()->subYear())->get());
        $counts['all'] =  $this->parseData($data, $this->getOrderSummaryQuery()->get());
        return $this->res->output(true, 'success', $counts, null);
    }

    public function getOrderSummaryQuery()
    {
        return DB::table('orders')
            ->select(DB::raw('order_statuses.id,order_statuses.name,count(*) as count'))
            ->join('order_statuses', 'order_statuses.id', '=', 'orders.order_status_id')
            ->groupByRaw('order_status_id');
    }
    public function parseData($data, $data2)
    {
        if (count($data2) > 0) {
            $data2 = $data2->toArray();
            $d = array_merge($data2, $data);
            $d = collect($d)->unique('id')->sortBy('id')->values()->all();
            return $d;
        }
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(orderRequest $request)
    {
        if ($request->photo_id == null) {
            $request->query->set('photo_id', 0);
        }
        if ($request->user_id != null) {
            $user = User::find($request->user_id);
            $request->merge(['user_id' => $request->user_id]);
        }

        if ($user !== null) {
            $order = new Order;
            $order->fill($request->all());
            $order->save();
            $this->saveLog($order->id, $request->order_status_id);
            $order->order_id = $this->generateOrderId($order->id);
            if ($request->hasFile('photo')) {
                $photo = new Photo;
                $p = $request->file('photo')->store('payment_slip');
                $photo->name = $p;
                if ($photo->save()) {
                    $order->photo_id = $photo->id;
                }
            }

            if ($request->promo_code != null && $user != null && $request->promo_code_id == null) {
                //check promocode process
                //check valid date
                //check with user id
                $order->user_id = $user->id;
                $today = Carbon::now()->format('Y-m-d');
                $promo = PromoCode::whereDate('start_date', '>=', $today)->whereDate('expired_date', '<=', $today)->first();
                if ($promo !== null) {
                    $userpromos = $user->promo;
                    if (!isEmpty($userpromos)) {
                        foreach ($userpromos as $p) {
                            if ($p->id == $promo->id) {
                                $order->promo_code_id = $promo->id;
                            }
                        }
                    }
                }
            }

            $order->save();
            //clean user cart
            event(new \App\Events\OrderReceived($user, $order));
            $order = $this->attachData($order);
            $order = new OrderResponse($order);
            //sent email

            return $this->res->output(true, 'Successfully created', $order, null);
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
        // dd($request->all())
        if ($request->photo_id == null) {
            $request->query->set('photo_id', 0);
        }
        $user =  $request->user();
        if ($user !== null) {
            $request->merge(['user_id' => $user->id]);
        }
        if ($request->user_id != null) {
            $user = User::find($request->user_id);
        }

        if ($user !== null) {
            $order = Order::find($id);
            $order->fill($request->all());
            $order->save();
            $this->saveLog($order->id, $request->order_status_id);
            if ($request->hasFile('photo')) {
                $photo = new Photo;
                $p = $request->file('photo')->store('payment_slip');
                $photo->name = $p;
                if ($photo->save()) {
                    $order->photo_id = $photo->id;
                }
            }

            if ($request->promo_code != null && $user != null && $request->promo_code_id == null) {
                //check promocode process
                //check valid date
                //check with user id
                $order->user_id = $user->id;
                $today = Carbon::now()->format('Y-m-d');
                $promo = PromoCode::whereDate('start_date', '>=', $today)->whereDate('expired_date', '<=', $today)->first();
                if ($promo !== null) {
                    $userpromos = $user->promo;
                    if (!isEmpty($userpromos)) {

                        foreach ($userpromos as $p) {
                            if ($p->id == $promo->id) {
                                $order->promo_code_id = $promo->id;
                            }
                        }
                    }
                }
            }

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
                }
            }


            if ($request->order_status_id == '4') {
                event(new \App\Events\Shipped($user, $order));
            }
            if ($request->order_status_id == '6') {
                event(new \App\Events\ChangeOrderStatus($order));
                event(new \App\Events\OrderCancel($user, $order));
            }
            $order = new OrderResponse($order);
            return $this->res->output(true, 'Successfully Updated', $order, null);
        }
        return $this->res->output(false, 'User not found', null, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $order = Order::find($id);
        if ($order !== null) {
            order::destroy($id);
        } else {
            return $this->res->output(true, 'Order not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
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

    public function saveLog($id, $status_id)
    {
        $orderLog = OrderLog::where('order_id', $id)->where('status_id', $status_id)->first();
        if ($orderLog === null) {
            $orderLog = new OrderLog;
            $orderLog->order_id = $id;
            $orderLog->status_id = $status_id;
            $orderLog->save();
        }
    }
}
