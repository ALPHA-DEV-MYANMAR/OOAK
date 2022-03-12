<?php

namespace App\library;

class CusResponse
{

    public function output($status = true, $message = null, $data = array(), $error=null)
    {
        return response()->json([
            'status' => $status,
            'message' => $message,
            'data' =>   $data,
            'errors' => $error
        ]);
    }
}
