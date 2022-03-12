<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AvalWeightRequest;
use App\Models\AvalWeight;
use App\library\CusResponse;

class AvalWeightController extends Controller
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
        $weights = AvalWeight::get();
        return $this->res->output(true, 'success', $weights, null);
    }
}
