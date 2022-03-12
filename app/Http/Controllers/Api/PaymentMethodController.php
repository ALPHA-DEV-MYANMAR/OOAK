<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaymentMethodRequest;
use App\Models\PaymentMethod;
use App\Models\Order;
use Illuminate\Http\Request;
use App\library\CusResponse;

class PaymentMethodController extends Controller
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
    public function index(Request $request)
    {
        $user = $request->user();
        $payments = PaymentMethod::where('name', 'Bank Transfer')->where('publish','yes')->get();
        if ($user !== null) {
            if ($this->_IsOldCustomer()) {
                $payments = PaymentMethod::where('publish','yes')->get();                
            }
        }



        return $this->res->output(true, 'success', $payments, null);
    }



    public function _IsOldCustomer()
    {
        $status = false;
        if (request()->user() === null) {
            return false;
        } else {
            $user_id = request()->user()->id;
            $orders = Order::where('user_id', $user_id)->with('status')->get();
            foreach ($orders as $o) {
                if ($o->status !== null) {
                    if ($o->status->name == 'Delivered') {
                        $status = true;
                    }
                }
            }
        }

        return $status;
    }
}
