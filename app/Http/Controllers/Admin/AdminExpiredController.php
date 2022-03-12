<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ExpiredRequest;
use App\Models\Expired;
use App\library\CusResponse;
use App\Http\Resources\ExpiredsResponseCollection;
use Carbon\Carbon;
use DB;

class AdminExpiredController extends Controller
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
        $price_id = request()->price_id ? request()->price_id : 'no';
        $start_date = request()->start_date ? request()->start_date : 'no';
        $end_date = request()->end_date ? request()->end_date : 'no';
        $per_page = request()->per_page ? request()->per_page : 15;
        $trash = request()->trash ? request()->trash : 'no';
        $stock = request()->stock ? request()->stock : 'no';
        $name = request()->name ? request()->name : '';
        $expireds = Expired::with('price.good');

        if ($price_id != 'no') {
            $expireds = $expireds->where('price_id', $price_id);
        }

        if ($start_date != 'no') {
            $start_date = Carbon::parse($start_date);
            $expireds = $expireds->whereDate('created_at', '>=', $start_date);
        }
        if ($end_date != 'no') {
            $end_date = Carbon::parse($end_date);
            $expireds = $expireds->whereDate('created_at', '<=', $end_date);
        }
        if ($trash == 'yes') {
            $expireds = $expireds->where('trash', 'yes');
        }   
        if ($name != '') {
            $expireds = $expireds->whereHas('price.good',function($q) use ($name) {
                $q->where("name","like","%{$name}%");
            } );
        }         

        $expireds =  $expireds->paginate($per_page);
        return $this->res->output(true, 'success', $expireds, null);

        // if ($stock != 'no') {
        //     $sums =  Expired::selectRaw("price_id,SUM(qty) as total_qty")
        //         ->groupBy('price_id')
        //         ->get()->toArray();
        // }        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExpiredRequest $request)
    {
        $expired = new Expired;
        $expired->fill($request->all());
        $expired->save();
        $expired->load('price.good');
        return $this->res->output(true, 'Successfully created', $expired, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $expired = Expired::with('price.good')->find($id);
        if ($expired !== null) {
            return $this->res->output(true, 'success', $expired, null);
        } else {
            return $this->res->output(false, 'Expired not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ExpiredRequest $request, $id)
    {
        $expired = Expired::find($id);
        if ($expired !== null) {
            $expired->fill($request->all());
            $expired->save();
            $expired->load('price.good');
        } else {
            return $this->res->output(true, 'Expired not found', [], null);
        }
        return $this->res->output(true, 'Successfully updated', $expired, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $expired = Expired::find($id);
        if ($expired !== null) {
            Expired::destroy($id);
        } else {
            return $this->res->output(true, 'Expired not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
