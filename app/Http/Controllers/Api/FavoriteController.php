<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FavoriteRequest;
use App\Models\Favorite;
use App\library\CusResponse;


class FavoriteController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
    }
    public function index()
    {        
        $user = request()->user();
        
        if($user !== null)
        {
            $favs = Favorite::with(['good','user']);
            $favs = $favs->where('user_id',$user->id);
            $favs = $favs->get();

            $favs->map(function ($g) {
                if($g->good != null)
                {
                    $g->good['favourite']= true;
                    $g->good['favourite_id'] = $g->id;
                }

            });
            return $this->res->output(true, 'success', $favs, null);
        }
        return $this->res->output(true, 'success', array(), null);
        
        
        
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FavoriteRequest $request)
    {
        $user = $request->user();
        if ($user !== null) {
            $user_id = $user->id;
            $fav = Favorite::where('user_id', $user_id)->where('good_id', $request->good_id)->first();
            if ($fav === null) {
                $fav = new Favorite;
                $fav->user_id = $user_id;
                $fav->good_id = $request->good_id;
                $fav->save();
            }

            $fav->load(['good', 'user']);
            $fav->good->append('favourite');
            $fav->good->append('favourite_id');
            return $this->res->output(true, 'Successfully created', $fav, null);
        }
        return $this->res->output(false, 'User token not found', null, null);
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
