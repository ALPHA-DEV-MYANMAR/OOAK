<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CartRequest;
use App\Models\Cart;
use App\library\CusResponse;

class AdminCartController extends Controller
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
        $user_id = (request()->get('user_id')) ? request()->get('user_id') : null;
        $carts = Cart::with('user')->with(array('price' => function ($q) {
            return $q->with('good');
        }));

        if ($user_id == null) {
            $carts = $carts->get();
        } else {
            $carts = $carts->where('user_id', $user_id)->get();
        }
        return $this->res->output(true, 'success', $carts, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CartRequest $request)
    {
        $cart = new Cart;
        $cart->user_id = $request->user_id;
        $cart->price_id = $request->price_id;
        $cart->qty = $request->qty;
        $cart->save();
        $cart->load('user');
        $cart->load(array('price' => function ($q) {
            return $q->with('good');
        }));
        return $this->res->output(true, 'Successfully created', $cart, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cart = Cart::with('user')->with(array('price' => function ($q) {
            return $q->with('good');
        }))->find($id);
        if ($cart !== null) {
            return $this->res->output(true, 'success', $cart, null);
        } else {
            return $this->res->output(false, 'Cart not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CartRequest $request, $id)
    {
        $cart = Cart::find($id);
        if ($cart !== null) {
            $cart->user_id = $request->user_id;
            $cart->price_id = $request->price_id;
            $cart->qty = $request->qty;
            $cart->save();
            $cart->load('user');
            $cart->load(array('price' => function ($q) {
                return $q->with('good');
            }));
        } else {
            return $this->res->output(true, 'Cart not found', [], null);
        }
        return $this->res->output(true, 'Successfully updated', $cart, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cart = Cart::find($id);
        if ($cart !== null) {
            Cart::destroy($id);
        } else {
            return $this->res->output(true, 'Cart not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
