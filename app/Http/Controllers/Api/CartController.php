<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CartRequest;
use App\Models\Cart;
use App\library\CusResponse;


class CartController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
    }

    public function index()
    {
        $user = request()->user();
        if ($user !== null) {
            $user_id = $user->id;
                $carts = Cart::where('user_id', $user_id)->with('user','price.good')->get();

            return $this->res->output(true, 'success', $carts, null);
        } else {
            return $this->res->output(false, 'User token not found', null, null);
        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CartRequest $request)
    {
        $user = request()->user();
        if ($user !== null) {
            $request->query->set('user_id', $user->id);
            $cart = Cart::where('user_id',$user->id)->where('price_id',$request->price_id)->first();
            if($cart === null)
            {
                $cart = new Cart;
            }else{
                $qty = $request->qty + $cart->qty;
                $request->merge(['qty' => $qty]);
            }
            
            $cart->fill($request->all());
            $cart->save();
            $cart->load('user');
            $cart->load(array('price' => function ($q) {
                return $q->with('good');
            }));
            return $this->res->output(true, 'Successfully created', $cart, null);
        } else {
            return $this->res->output(false, 'User token not found', null, null);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = request()->user();
        if ($user !== null) {
            $cart = Cart::with('user')->with(array('price' => function ($q) {
                return $q->with('good');
            }))->find($id);
            if ($cart !== null) {
                return $this->res->output(true, 'success', $cart, null);
            } else {
                return $this->res->output(false, 'Cart not found', [], null);
            }
        } else {
            return $this->res->output(false, 'User token not found', null, null);
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
        $user = request()->user();
        if ($user !== null) {
            $request->query->set('user_id', $user->id);
            $cart = Cart::find($id);
            $cart->fill($request->all());
            $cart->save();
            $cart->load('user');
            $cart->load(array('price' => function ($q) {
                return $q->with('good');
            }));
            return $this->res->output(true, 'Successfully updated', $cart, null);
        } else {
            return $this->res->output(false, 'User token not found', null, null);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = request()->user();
        if ($user !== null) {
            $user_id = $user->id;
            $cart = Cart::find($id);

            if ($cart !== null) {
                if ($user_id == $cart->user_id) {
                    Cart::destroy($id);
                } else {
                    return $this->res->output(false, 'Cart not found', [], null);
                }
            } else {
                return $this->res->output(false, 'User not found', [], null);
            }
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
