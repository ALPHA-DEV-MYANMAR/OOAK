<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gender;
use App\library\CusResponse;

class GenderController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
    }

    public function index()
    {
        $gender = Gender::all();
        return $this->res->output(true, 'success', $gender, null);
    }
}
