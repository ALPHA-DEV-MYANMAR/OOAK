<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Gender;
use App\library\CusResponse;

class AdminGenderController extends Controller
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
