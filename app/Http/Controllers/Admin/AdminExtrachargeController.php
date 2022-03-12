<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ExtraCharge;
use App\library\CusResponse;

class AdminExtrachargeController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
    }

    public function show()
    {
        $extra = ExtraCharge::first();
        if ($extra !== null) {
            return $this->res->output(true, 'success', $extra, null);
        } else {
            return $this->res->output(false, 'Extra Charge data not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $extra = ExtraCharge::first();
        if ($extra !== null) {
            $extra->fill($request->all());
            $extra->save();
        } else {
            return $this->res->output(true, 'Extra Charge data not found', [], null);
        }
        return $this->res->output(true, 'Successfully updated', $extra, null);
    }
}
