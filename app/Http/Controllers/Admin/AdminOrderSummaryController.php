<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderSummaryRequest;
use App\Models\OrderSummary;
use App\library\CusResponse;

class AdminOrderSummaryController extends Controller
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
        $summarys = OrderSummary::get();
        return $this->res->output(true, 'success', $summarys, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrderSummaryRequest $request)
    {
        $summary = new OrderSummary;
        $summary->name = $request->name;
        $summary->save();
        return $this->res->output(true, 'Successfully created', $summary, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $summary = OrderSummary::find($id);
        if ($summary !== null) {
            return $this->res->output(true, 'Success', $summary, null);
        } else {
            return $this->res->output(false, 'Summary not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(OrderSummaryRequest $request, $id)
    {
        $summary = OrderSummary::find($id);
        if ($summary !== null) {
            $summary->name = $request->name;
            $summary->save();
            return $this->res->output(true, 'Successfully updated', $summary, null);
        } else {
            return $this->res->output(false, 'Summary not found', [], null);
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
        $summary = OrderSummary::find($id);
        if ($summary !== null) {
            OrderSummary::destroy($id);
        } else {
            return $this->res->output(false, 'Summary not found', $summary, null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
