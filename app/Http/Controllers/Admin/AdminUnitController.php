<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UnitRequest;
use App\Models\Unit;
use App\library\CusResponse;

class AdminUnitController extends Controller
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
        $units = Unit::get();
        return $this->res->output(true, 'success', $units, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UnitRequest $request)
    {
        $unit = new Unit;
        $unit->name = $request->name;
        $unit->save();
        return $this->res->output(true, 'Successfully created', $unit, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $unit = Unit::find($id);
        if ($unit !== null) {
            return $this->res->output(true, 'Success', $unit, null);
        } else {
            return $this->res->output(false, 'Unit not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UnitRequest $request, $id)
    {
        $unit = Unit::find($id);
        if ($unit !== null) {
            $unit->name = $request->name;
            $unit->save();
        }else{
            return $this->res->output(false, 'Unit not found', [], null);
        }
        return $this->res->output(true, 'Successfully updated', $unit, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $unit = Unit::find($id);
        if ($unit !== null) {
            Unit::destroy($id);
        } else {
            return $this->res->output(false, 'Unit not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', $unit, null);
    }
}
