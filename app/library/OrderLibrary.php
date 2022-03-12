<?php

namespace App\library;

use App\Models\OrderLog;
use App\Models\ExtraCharge;
use App\Models\Expired;
use App\Models\Pending;
use App\Models\State;
use Log;

class OrderLibrary
{

    public function total($order, $user)
    {
        $extra = ExtraCharge::first();
        $data = array(
            'total' => 0,
            'address' => '',
            'state_deli_cost' => 0,
            'extra_charge_cod' => 0,
            'promo' => 0,
            'final_total' => 0,
            'reduce_cod_charge' => 0,
            'minimum' => 0,
        );
        foreach ($order->items as $i) {
            if ($i->price != null) {
                $data['total'] = $data['total'] + ($i->quantity * $i->price->price);
            }
        }
        if ($user->address != null && $user->address->state != null) {

            $data['state_deli_cost'] = $user->address->state->cod_charge;
            $data['minimum'] = $user->address->state->minimum;
            if ($data['total'] >= $data['minimum']) {
                $data['reduce_cod_charge'] = $user->address->state->cod_charge;
            }
            $data['address'] =   $user->address->state->name .','.$user->address->address;
        }
        if ($order->promo != null) {
            $data['promo'] = $order->promo->price;
        }
        if ($extra != null) {
            $data['extra_charge_cod'] = $extra->cod_charge;
        }

        $data['final_total'] = $data['total'] + $data['state_deli_cost']  - $data['promo']   - $data['reduce_cod_charge'];
        if ($order->payment_method_id == '2') {
            $data['final_total'] = $data['total'] + $data['state_deli_cost'] + $data['extra_charge_cod'] - $data['promo']  - $data['reduce_cod_charge'];
        }
        return $data;
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
    public function balanceStock($price_id, $qty, $order_id)
    {
        $ex = Expired::where('price_id', $price_id)->where('trash', 'no')->where('qty', '>', 0)->orderBy('expired_date', 'asc')->first();
        if ($ex !== null) {
            if ($ex->qty > $qty) {
               $ex->qty = $ex->qty - $qty;
                $ex->save();
                $pending = Pending::where('expired_date', $ex->expired_date)->where('price_id', $price_id)->where('order_id',$order_id)->first();
                if ($pending === null) {
                    $pending = new Pending;
                    $pending->expired_date = $ex->expired_date;
                    $pending->price_id = $ex->price_id;
                    $pending->order_id = $order_id;
                }
                $pending->qty = $pending->qty + $qty;
                $pending->save();
                Log::info("pending inserted id is ".$pending->id);
            } else {
                $pending = Pending::where('expired_date', $ex->expired_date)->where('order_id', $order_id)->where('price_id', $price_id)->first();
                if ($pending == null) {
                    $pending = new Pending;
                    $pending->expired_date = $ex->expired_date;
                    $pending->price_id = $ex->price_id;
                    $pending->order_id = $order_id;
                }

                $pending->qty = $pending->qty + $ex->qty;
                $pending->save();

                $remain = $qty - $ex->qty;
                $ex->qty = 0;
                $ex->save();
                $this->balanceStock($price_id, $remain, $order_id);
            }
        }
    }
    public function returnGood($order_id)
    {
        $pending = Pending::where('order_id', $order_id)->get();
        foreach ($pending as $p) {
            $ex = Expired::where('price_id', $p->price_id)->where('expired_date', $p->expired_date)->first();
            if ($ex == null) {
                $ex = new Expired;
                $ex->price_id = $p->price_id;
                $ex->expired_date = $p->expired_date;
            }
            $ex->qty = $ex->qty + $p->qty;
            $ex->save();
            $p->delete();
            Log::info("remove pending  id is ".$p->id ."for order id".$order_id);

        }
    }
}
