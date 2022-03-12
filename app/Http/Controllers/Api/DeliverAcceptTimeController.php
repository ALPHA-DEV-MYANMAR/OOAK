<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\library\CusResponse;
use App\Models\DeliveryAcceptTime;

class DeliverAcceptTimeController extends Controller
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
}
