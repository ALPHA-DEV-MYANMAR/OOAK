<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\library\CusResponse;
use Illuminate\Http\Request;

class BankInfoController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
    }
    public function index()
    {
        $bank1 = array(
            'bank_name' => "Japan Post Bank ( ゆうちょ銀行 )",
            'code' => 'code',
            'type' => "ふつう( 普通 )",
            'branch' => "10180 (〇一八 - 018)",
            'acc_number' => "97983491",
            'acc_name' => "ワー ワー ルイン"

        );
        $banks = array();
        array_push($banks,$bank1);
 
        $bank2 = array(
            'bank_name' => "MUFG ( 三菱東京ＵＦＪ銀行 )",
            'code' => 'code',
            'type' => "ふつう( 普通 )",
            'branch' => "744 ( 新小岩支店 - しんこいわ してん )",
            'acc_number' => "0258321",
            'acc_name' => "ワー ワー ルイン"

        );
        array_push($banks,$bank2);

        return $this->res->output(true, 'success', $banks, null);
    }
}
