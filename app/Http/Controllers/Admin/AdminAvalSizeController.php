<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AvalSizeRequest;
use App\Models\AvalSize;
use App\library\CusResponse;

class AdminAvalSizeController extends Controller
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
        $sizes = AvalSize::get();
        return $this->res->output(true, 'success', $sizes, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AvalSizeRequest $request)
    {
        $size = new AvalSize;
        $size->name = $request->name;
        $size->save();
        return $this->res->output(true, 'Successfully created', $size, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $size = AvalSize::find($id);
        if ($size !== null) {
            return $this->res->output(true, 'success', $size, null);
        } else {
            return $this->res->output(false, 'size not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AvalSizeRequest $request, $id)
    {
        $size = AvalSize::find($id);
        if ($size !== null) {
            $size->name = $request->name;
            $size->save();
        }else{
            return $this->res->output(true, 'Size not found', $size, null);
        }
        return $this->res->output(true, 'Successfully updated', $size, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $size = AvalSize::find($id);
        if ($size !== null) {
            AvalSize::destroy($id);
        } else {
            return $this->res->output(false, 'Size not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
