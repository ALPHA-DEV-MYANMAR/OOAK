<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeliverAcceptTimeRequest;
use App\library\CusResponse;
use App\Models\DeliveryAcceptTime;

class AdminDeliverAcceptTimeController extends Controller
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
        $per_page = request()->per_page ? request()->per_page : 15;
        $accept_timeBy = request()->accept_timeBy ? request()->accept_timeBy : 'id';
        $sorting = request()->sorting ? request()->sorting : 'desc';


        $accept_times = DeliveryAcceptTime::orderBy($accept_timeBy, $sorting)->paginate($per_page);
        return $this->res->output(true, 'success', $accept_times, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DeliverAcceptTimeRequest $request)
    {
        $accept_time = new DeliveryAcceptTime;
        $accept_time->fill($request->all());
        $accept_time->save();

        return $this->res->output(true, 'Successfully created', $accept_time, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $accept_time = DeliveryAcceptTime::find($id);

        if ($accept_time !== null) {
            return $this->res->output(true, 'Success', $accept_time, null);
        } else {
            return $this->res->output(false, 'Accept Time not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DeliverAcceptTimeRequest $request, $id)
    {
        $accept_time = DeliveryAcceptTime::find($id);
        if($accept_time === null)
        {
            return $this->res->output(false, 'Accept Time not found', [], null);
        }else{
            $accept_time->fill($request->all());
            $accept_time->save();
    
           return $this->res->output(true, 'Successfully Updated', $accept_time, null);
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
        $accept_time = DeliveryAcceptTime::find($id);
        if ($accept_time !== null) {
            $accept_time::destroy($id);
        } else {
            return $this->res->output(true, 'Accept Time not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }

}
