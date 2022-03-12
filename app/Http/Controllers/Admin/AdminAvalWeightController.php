<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AvalWeightRequest;
use App\Models\AvalWeight;
use App\library\CusResponse;

class AdminAvalWeightController extends Controller
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AvalWeightRequest $request)
    {
        $weight = new AvalWeight;
        $weight->name = $request->name;
        $weight->save();
        return $this->res->output(true, 'Successfully created', $weight, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $weight = AvalWeight::find($id);
        if ($weight !== null) {
            return $this->res->output(true, 'success', $weight, null);
        } else {
            return $this->res->output(false, 'Weight not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AvalWeightRequest $request, $id)
    {
        $weight = AvalWeight::find($id);
        if ($weight !== null) {
            $weight->name = $request->name;
            $weight->save();
        } else {
            return $this->res->output(false, 'Weight not found', [], null);
        }
        return $this->res->output(true, 'Successfully updated', $weight, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $weight = AvalWeight::find($id);
        if ($weight !== null) {
            AvalWeight::destroy($id);
        } else {
            return $this->res->output(false, 'Weight not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
