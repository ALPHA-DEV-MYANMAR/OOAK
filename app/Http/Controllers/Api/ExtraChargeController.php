<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\State;
use App\Models\ExtraCharge;
use App\library\CusResponse;

class ExtraChargeController extends Controller
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
        $state = State::get();
        $extra = ExtraCharge::first();
        $cod_charge = 100;
        $delivery_discount_threshold = 10000;
        $reduce_cod_charge = 500;

        if($extra !== null)
        {
            $cod_charge = $extra->cod_charge;
            $delivery_discount_threshold = $extra->delivery_discount_threshold;
            $reduce_cod_charge = $extra->reduce_cod_charge;
        }
        

        $state = array(
            'delivery_charges' => $state,
            'cod_charge' => (int)  $cod_charge,
            'delivery_discount_threshold' => (int) $delivery_discount_threshold , 
            'discount' => array(
                "message" => "If total amount >= ".$delivery_discount_threshold ." , we will reduce ".$reduce_cod_charge." from cod charge",
                "total"=> (int) $delivery_discount_threshold,
                "reduce_cod_charge" => (int)  $reduce_cod_charge
            )
        );
        return $this->res->output(true, 'success', $state, null);
    }
}
