<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\State;
use App\library\CusResponse;
use Illuminate\Http\Request;

class AdminStateController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
    }
    public function index()
    {
        $states = State::all();
        return $this->res->output(true, 'success', $states, null);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $state = new State;
        $state->name = $request->name;
        $state->cod_charge = $request->cod_charge;
        $state->minimum = $request->minimum;
        $state->save();
        return $this->res->output(true, 'Successfully created', $state, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $state = State::find($id);
        if ($state !== null) {
            return $this->res->output(true, 'success', $state, null);
        } else {
            return $this->res->output(false, 'state not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $state = State::find($id);
        if ($state !== null) {
            $state->name = $request->name;
            $state->cod_charge = $request->cod_charge;
            $state->minimum = $request->minimum;
            $state->save();
        }
        return $this->res->output(true, 'Successfully updated', $state, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $state = State::find($id);
        if ($state !== null) {
            State::destroy($id);
        } else {
            return $this->res->output(false, 'State not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
