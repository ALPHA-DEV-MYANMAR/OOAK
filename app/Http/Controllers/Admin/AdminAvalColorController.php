<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AvalColorRequest;
use App\Models\AvalColor;
use App\library\CusResponse;

class AdminAvalColorController extends Controller
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
        $colors = AvalColor::get();
        return $this->res->output(true, 'success', $colors, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AvalColorRequest $request)
    {
        $color = new AvalColor;
        $color->name = $request->name;
        $color->save();
        return $this->res->output(true, 'Successfully created', $color, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $color = AvalColor::find($id);
        if ($color !== null) {
            return $this->res->output(true, 'Success', $color, null);
        } else {
            return $this->res->output(false, 'color not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AvalColorRequest $request, $id)
    {
        $color = AvalColor::find($id);
        if ($color !== null) {
            $color->name = $request->name;
            $color->save();
            return $this->res->output(true, 'Successfully updated', $color, null);
        } else {
            return $this->res->output(false, 'color not found', [], null);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $color = AvalColor::find($id);
        if ($color !== null) {
            AvalColor::destroy($id);
        } else {
            return $this->res->output(false, 'color not found', $color, null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
