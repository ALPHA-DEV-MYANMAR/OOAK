<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\library\CusResponse;

class BrandController extends Controller
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
        $brands = Brand::get();
        return $this->res->output(true, 'success', $brands, null);
    }
}
