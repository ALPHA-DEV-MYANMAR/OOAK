<?php

namespace App\Listeners;

use App\Events\OrderReceived;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use App\Models\Cart;
use App\Models\User;
use App\Models\OrderItem;
use App\Models\Price;
use App\Models\Order;
use App\Models\OrderSummary;
use App\Models\State;
use App\Models\ExtraCharge;
use App\Models\PromoCode;
use App\library\OrderLibrary;


class OrderReceivedListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  OrderCancelEvent  $event
     * @return void
     */
    public function handle(OrderReceived $event)
    {
        $order_lib = new OrderLibrary();       

        $user = $event->user;     
        $order= $event->order;
        $total = 0;
        if($user != null && $order != null)
        {

            $order_lib->saveLog($order->id, 1);


            $user = User::find($user->id);
            $user->load('address');
            $order = Order::find($order->id);
            $email = $user->email;
            $user_id = $user->id;

            $carts = Cart::where('user_id', $user_id)->get();

            foreach ($carts as $c) {
                $p  = Price::find($c->price_id);
                $price = 0;
                if($p !== null)
                {
                    $price = $p->price;
                }
                $item = new OrderItem;
                $item->order_id = $order->id;
                $item->goods_price_id = $c->price_id;
                $item->quantity = $c->qty;
                $item->per_price = $c->qty * $price;   
                $item->total_price = $price;               
                $item->save();                
                $order_lib->balanceStock($c->price_id, $c->qty,$order->id);

                $total = $total +  ($c->qty * $price);
            }     
            //clear Cart
            Cart::where('user_id', $user_id)->delete();

            //calculate remaining items.
            $ordersummary = OrderSummary::where('order_id',$order->id)->first();
            if($ordersummary === null)
            {
                $ordersummary = new OrderSummary;
                $ordersummary->order_id = $order->id;                
            }
            $cod_charge = 0;
            $deli_price = 0;
            $deli_cost = 0;
            $promo = 0;

                $extra = ExtraCharge::first();
                if($extra !== null)
                {
                    if($order->payment_method_id == '2')
                    {
                        $cod_charge  = $extra->cod_charge;
                        $total = $total + $extra->cod_charge;
                    }

                }
                
                if($user->address != null)
                {
                    $state = State::find($user->address->state_id);
                    if($state !== null)
                    {
                        $deli_price = $state->cod_charge;
                        if($total <= $state->minimum)
                        {
                            $deli_cost = $state->cod_charge;
                            $total = $total + $state->cod_charge;
                        }                    
                    }
                    
                }
            

            if($order->promo_code_id > 0)
            {
                $p = PromoCode::find($order->promo_code_id);
                if($p !== null)
                {
                    $promo = $p->price; 
                    $total = $total - $p->price;
                }
            }

            $ordersummary->cod_charge = $cod_charge; 
            $ordersummary->delivery_price =  $deli_price;
            $ordersummary->delivery_cost = $deli_cost;
            $ordersummary->promo = $promo;
            $ordersummary->total = $total;
            $ordersummary->save();


            //
            if ($order->order_status_id == '1') {
                $admin = env('OOAK_EMAIL',"info@ooak.jp");
                if ($order->payment_method_id == '1') {
                    $order->order_status_id = 2;                    
                    $order_lib->saveLog($order->id, 2);
                    $event->order = Order::find($order->id);
                    Mail::to($email)->send(new \App\Mail\BankTransfer($event));
                    Mail::to($admin)->send(new \App\Mail\AdminBankMail($event));
                }

                if ($order->payment_method_id == '2') {
                    $order->order_status_id = 3;
                    $order_lib->saveLog($order->id, 3);                    
                    Mail::to($email)->send(new \App\Mail\Cod($event));
                    Mail::to($admin)->send(new \App\Mail\AdminCodMail($event));
                }
            }
        }
    }
}
