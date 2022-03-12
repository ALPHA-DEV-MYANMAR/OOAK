<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Point;
use App\library\CusResponse;

class AdminPointController extends Controller
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
        $points = Point::with('user')->paginate(15);
        return $this->res->output(true, 'success', $points, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_id = $request->user_id;
        $point = $request->point;
        $status = ($request->status == null) ? 'active' : $request->status;
        $p = Point::where('user_id',$user_id)->first();
        if($p === null)
        {
            $p = new Point;
            $p->user_id = $user_id;
            $p->status = $status;
            $p->point = $point;
            $p->save();
        }else{
            $p->status = $status;
            $p->point = $p->point + $point;
            $p->save();
        }
        event(new \App\Events\TopUpEvent($p));
        return $this->res->output(true, 'success', $p, null);
    }

    public function status(Request $request)
    {
        $user_id = $request->user_id;
        $status = $request->status;
        if($user_id != null && $status != null)
        {
            $p = Point::where('user_id',$user_id)->first();
            if($p != null)
            {
                $p->status = $status;
                $p->save();
                event(new \App\Events\ChangePointStatusEvent($p));
                return $this->res->output(true, 'success', $p, null);
            }else{
                return $this->res->output(false, 'Point not found', null, null);
            }

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $point = Point::where('user_id',$id)->first();
        $point->load('user');
        return $this->res->output(true, 'success', $point, null);
    }

}
