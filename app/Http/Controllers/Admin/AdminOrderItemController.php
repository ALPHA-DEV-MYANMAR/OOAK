<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderItemRequest;
use App\Models\OrderItem;
use App\Models\Order;
use App\Models\Price;
use App\library\CusResponse;

class AdminOrderItemController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = OrderItem::get();
        return $this->res->output(true, 'success', $items, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrderItemRequest $request)
    {
        $price = Price::find($request->goods_price_id);
        if($price !== null && ($price->quantity >= $request->quantity ))
        {
            $item = new OrderItem;
            $item->order_id  = $request->order_id;
            $item->quantity = $request->quantity;
            $item->goods_price_id = $request->goods_price_id;
            $item->per_price = $price->price;
            $item->total_price = $price->price * $request->quantity;
            $item->save();
            $order = Order::find($request->order_id);
            if($order !== null)
            {
                //event(new \App\Events\AddItemEvent($order, $item));
            }
            return $this->res->output(true, 'Successfully created', $item, null);
        }
        return $this->res->output(false, 'Quantity not enough', null, null);      
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = OrderItem::find($id);
        if ($item !== null) {
            return $this->res->output(true, 'Success', $item, null);
        } else {
            return $this->res->output(false, 'item not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(OrderItemRequest $request, $id)
    {
        $item = OrderItem::find($id);
        $price = Price::find($item->goods_price_id);
        if ($item !== null) {
            $item->order_id  = $request->order_id;
            $item->quantity = $request->quantity;
            $item->goods_price_id = $request->goods_price_id;
            $item->per_price = $price->price;
            $item->total_price = $price->price * $request->quantity;
            $item->save();
            $order = Order::find($request->order_id);
            if($order !== null)
            {
             //   event(new \App\Events\AddItemEvent($order, $item));
            }
        } else {
            return $this->res->output(false, 'item not found', [], null);
        }
        return $this->res->output(true, 'Successfully updated', $item, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $items = OrderItem::find($id);
        if ($items !== null) {
            $items::destroy($id);
        } else {
            return $this->res->output(false, 'item not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', null, null);
    }
}
