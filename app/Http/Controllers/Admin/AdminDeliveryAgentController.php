<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeliveryAgentRequest;
use App\Models\DeliveryAgent;
use App\library\CusResponse;

class AdminDeliveryAgentController extends Controller
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
        $deli_agents = DeliveryAgent::get();
        return $this->res->output(true, 'success', $deli_agents, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DeliveryAgentRequest $request)
    {
        $deli_agent = new DeliveryAgent;
        $deli_agent->fill($request->all());
        $deli_agent->save();
        return $this->res->output(true, 'Successfully created', $deli_agent, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $deli_agent = DeliveryAgent::find($id);
        if ($deli_agent !== null) {
            return $this->res->output(true, 'success', $deli_agent, null);
        } else {
            return $this->res->output(false, 'Delivery agent not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DeliveryAgentRequest $request, $id)
    {
        $deli_agent = DeliveryAgent::find($id);
        if ($deli_agent !== null) {
            $deli_agent->fill($request->all());
            $deli_agent->save();
            return $this->res->output(true, 'Successfully updated', $deli_agent, null);
        }else{
            return $this->res->output(false, 'Delivery agent not found', [], null);
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
        $deli_agent = DeliveryAgent::find($id);
        if ($deli_agent !== null) {
            DeliveryAgent::destroy($id);
        } else {
            return $this->res->output(false, 'Delivery agent not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
