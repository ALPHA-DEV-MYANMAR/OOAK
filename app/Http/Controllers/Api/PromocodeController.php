<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PromoRequest;
use Illuminate\Http\Request;
use App\Models\PromoCode;
use App\library\CusResponse;
use Carbon\Carbon;

class PromocodeController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $user =  $request->user();
        if ($user != null) {
            $today = Carbon::now();
            $promo = PromoCode::with('categories')->whereDate('start_date', '<=', $today)
                ->whereDate('expired_date', '>=', $today)
                ->where('code', $id)->first();
            if ($promo !== null) {
                if ($this->CheckUserPromo($user, $promo)) {

                    return $this->res->output(true, 'Success', $promo, null);
                }
                return $this->res->output(false, 'promo already used by this user ', [], null);
            } else {
                return $this->res->output(false, 'promo not valid', [], null);
            }
        } else {
            return $this->res->output(false, 'User token not valid', [], null);
        }
    }

    public function CheckUserPromo($user, $promo)
    {
        $avaliable_to_use = true;
        $count = $promo->count;
        $used = $promo->used;
        if ($count > $used) {
            $users_promos = $user->promos;
                foreach ($users_promos as $p) {
                    if ($p->id == $promo->id) {
                        $avaliable_to_use = false;
                    }
                }
            

        } else {
            $avaliable_to_use = false;
        }
        return $avaliable_to_use;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PromoRequest $request, $id)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }
}
