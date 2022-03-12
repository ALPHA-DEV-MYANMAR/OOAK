<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PriceRequest;
use App\Http\Requests\PriceRequestUpdate;
use App\Models\Price;
use App\library\CusResponse;

class AdminPriceController extends Controller
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
        $prices = Price::with('good')->get();
        return $this->res->output(true, 'success', $prices, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(PriceRequest $request)
    {
        $price = new Price;
        $price->fill($request->all());
        $price->save();
        $price->load(array('aval_color', 'aval_size', 'aval_weight', 'aval_option', 'good'));
        return $this->res->output(true, 'Successfully created', $price, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $price = Price::with(array('aval_color', 'aval_size', 'aval_weight', 'aval_option', 'good'))->find($id);
        if ($price !== null) {
            return $this->res->output(true, 'Success', $price, null);
        } else {
            return $this->res->output(false, 'price not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PriceRequestUpdate $request, $id)
    {
        $price = Price::find($id);
        if ($price !== null) {
            $price->fill($request->all());
            $price->save();
            $price->load(array('aval_color', 'aval_size', 'aval_weight', 'aval_option', 'good'));

            return $this->res->output(true, 'Successfully updated', $price, null);
        }
        return $this->res->output(false, 'price not found', [], null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $price = Price::find($id);
        if ($price !== null) {
            Price::destroy($id);
        } else {
            return $this->res->output(false, 'price not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
