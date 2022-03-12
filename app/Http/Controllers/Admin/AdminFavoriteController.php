<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\FavoriteRequest;
use App\Models\Favorite;
use App\library\CusResponse;
use Hamcrest\Type\IsInteger;

class AdminFavoriteController extends Controller
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
        $user_id = request()->user_id;
        $favs = Favorite::with(['good','user']);
        if($user_id !== null)
        {
            $favs = $favs->where('user_id',$user_id);
        }
        
        $favs = $favs->get();
        return $this->res->output(true, 'success', $favs, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FavoriteRequest $request)
    {
        $user_id = $request->user_id;
        $fav = Favorite::where('user_id',$user_id)->where('good_id',$request->good_id)->first();
        if($fav === null)
        {
            $fav = new Favorite;
            $fav->user_id = $user_id;
            $fav->good_id = $request->good_id;
            $fav->save();
        }

        $fav->load(['good','user']);
        return $this->res->output(true, 'Successfully created', $fav, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $fav = Favorite::with(['good','user'])->find($id);
        if ($fav !== null) {
            return $this->res->output(true, 'Success', $fav, null);
        } else {
            return $this->res->output(false, 'favorite items not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(FavoriteRequest $request, $id)
    {
        $user_id = $request->user_id;
        $fav = Favorite::where('user_id',$user_id)->where('good_id',$request->good_id)->first();

        if ($fav !== null) {
            $fav->user_id = $user_id;
            $fav->good_id = $request->good_id;
            $fav->save();
            $fav->load(['good','user']);
            return $this->res->output(true, 'Successfully updated', $fav, null);
        } else {
            return $this->res->output(false, 'favorite items not found', [], null);
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
        $fav = Favorite::find($id);
        if ($fav !== null) {
            Favorite::destroy($id);
        } else {
            return $this->res->output(false, 'favorite items not found', $fav, null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
