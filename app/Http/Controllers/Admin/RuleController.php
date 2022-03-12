<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RuleController extends Controller
{
    public function privacyPolicy() 
    {
        return view('admin.privacy-policy');
    }

    public function termsCondition() 
    {
        return view('admin.terms-in-condition');
    }

    public function refund() 
    {
        return view('admin.refund');
    }
}
