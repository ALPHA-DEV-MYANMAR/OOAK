<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeliveryAgentRequest;
use App\Models\DeliveryAgent;
use App\library\CusResponse;

class DeliveryAgentController extends Controller
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
}
