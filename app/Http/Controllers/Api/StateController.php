<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\State;
use App\library\CusResponse;

class StateController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
    }
    public function index()
    {
        $states = State::all();
        return $this->res->output(true, 'success', $states, null);
    }
}
