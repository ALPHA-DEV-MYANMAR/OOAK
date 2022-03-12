<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaymentMethodRequest;
use App\Models\PaymentMethod;
use App\Models\Order;
use Illuminate\Http\Request;
use App\library\CusResponse;

class AdminPaymentMethodController extends Controller
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
        $payments = PaymentMethod::get();
        return $this->res->output(true, 'success', $payments, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PaymentMethodRequest $request)
    {
        $payment = new PaymentMethod;
        $payment->fill($request->all());
        $payment->save();
        return $this->res->output(true, 'Successfully created', $payment, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $payment = PaymentMethod::find($id);
        if ($payment !== null) {
            return $this->res->output(true, 'success', $payment, null);
        } else {
            return $this->res->output(false, 'Payment method not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PaymentMethodRequest $request, $id)
    {
        $payment = PaymentMethod::find($id);
        if ($payment !== null) {
            $payment->fill($request->all());
            $payment->save();
            return $this->res->output(true, 'Successfully updated', $payment, null);
        } else {
            return $this->res->output(false, 'Payment Method not found', [], null);
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
        $payment = PaymentMethod::find($id);
        if ($payment !== null) {
            PaymentMethod::destroy($id);
        } else {
            return $this->res->output(false, 'Payment method not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
