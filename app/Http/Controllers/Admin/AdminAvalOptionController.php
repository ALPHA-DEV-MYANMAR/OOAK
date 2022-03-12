<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AvalOptionRequest;
use App\Models\AvalOption;
use App\library\CusResponse;

class AdminAvalOptionController extends Controller
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
        $options = AvalOption::get();
        return $this->res->output(true, 'success', $options, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AvalOptionRequest $request)
    {
        $option = new AvalOption;
        $option->name = $request->name;
        $option->save();
        return $this->res->output(true, 'Successfully created', $option, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $option = AvalOption::find($id);
        if ($option !== null) {
            return $this->res->output(true, 'success', $option, null);
        } else {
            return $this->res->output(false, 'Option not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AvalOptionRequest $request, $id)
    {
        $option = AvalOption::find($id);
        if ($option !== null) {
            $option->name = $request->name;
            $option->save();
        }
        return $this->res->output(true, 'Successfully updated', $option, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $option = AvalOption::find($id);
        if ($option !== null) {
            AvalOption::destroy($id);
        } else {
            return $this->res->output(false, 'option not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
