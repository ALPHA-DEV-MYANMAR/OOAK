<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\library\CusResponse;
use App\Models\Promotion;


class PromotionController extends Controller
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
        $publish = request()->publish ? request()->publish : 'yes';
        $promotions = Promotion::orderBy('id', 'desc');

        if ($publish != 'all') {
            $promotions = $promotions->where('publish', $publish);
        }
        $promotions = $promotions->with('photo')->get();

        return $this->res->output(true, 'success', $promotions, null);
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $promotion = Promotion::find($id);
        $promotion->load('photo');
        if ($promotion !== null) {
            return $this->res->output(true, 'success', $promotion, null);
        } else {
            return $this->res->output(false, 'Promotion not found', [], null);
        }
    }
}
