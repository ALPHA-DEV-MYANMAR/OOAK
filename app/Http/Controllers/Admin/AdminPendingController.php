<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PendingRequest;
use App\Models\Pending;
use App\library\CusResponse;

class AdminPendingController extends Controller
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
        $pendings = Pending::with('order.status','price.good')->paginate(10);
        return $this->res->output(true, 'success', $pendings, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PendingRequest $request)
    {
        $pending = new Pending;
        $pending->fill($request->all());
        $pending->save();
        $pending->load('order.status','price.good');
        return $this->res->output(true, 'Successfully created', $pending, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pending = Pending::find($id);
        $pending->load('order.status','price.good');
        if ($pending !== null) {
            return $this->res->output(true, 'success', $pending, null);
        } else {
            return $this->res->output(false, 'Pending not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PendingRequest $request, $id)
    {
        $pending = Pending::find($id);
        if ($pending !== null) {
            $pending->fill($request->all());
            $pending->save();
            $pending->load('order.status','price.good');
        } else {
            return $this->res->output(true, 'Pending not found', [], null);
        }
        return $this->res->output(true, 'Successfully updated', $pending, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pending = Pending::find($id);
        if ($pending !== null) {
            Pending::destroy($id);
        } else {
            return $this->res->output(true, 'Pending not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
