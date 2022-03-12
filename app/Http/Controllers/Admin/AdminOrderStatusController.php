<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderStatusRequest;
use App\Models\OrderStatus;
use App\library\CusResponse;

class AdminOrderStatusController extends Controller
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
        $status = OrderStatus::get();
        return $this->res->output(true, 'success', $status, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrderStatusRequest $request)
    {
        $status = new OrderStatus;
        $status->name = $request->name;
        $status->save();
        return $this->res->output(true, 'Successfully created', $status, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $status = OrderStatus::find($id);
        if ($status !== null) {
            return $this->res->output(true, 'Success', $status, null);
        } else {
            return $this->res->output(false, 'status not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(OrderStatusRequest $request, $id)
    {
        $status = OrderStatus::find($id);
        if ($status !== null) {
            $status->name = $request->name;
            $status->save();
        }else{
            return $this->res->output(false, 'status not found', [], null);
        }
        return $this->res->output(true, 'Successfully updated', $status, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $status = OrderStatus::find($id);
        if ($status !== null) {
            $status::destroy($id);
        } else {
            return $this->res->output(false, 'status not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted',null, null);
    }
}
