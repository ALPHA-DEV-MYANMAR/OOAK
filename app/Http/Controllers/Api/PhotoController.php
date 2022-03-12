<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Photorequest;
use Illuminate\Http\Request;
use App\library\CusResponse;
use App\Models\Photo;
use Log;

class PhotoController extends Controller
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
        $photos = Photo::get();
        return $this->res->output(true, 'success', $photos, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Photorequest $request)
    {
        Log::info("user is trying to upload");
        $photo = new Photo;
        $p = $request->file('name')->store('photos');
        $photo->name = $p;
        $photo->save();
        Log::info("upload success");
        return $this->res->output(true, 'Successfully created', $photo, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $photo = Photo::find($id);
        if ($photo !== null) {
            return $this->res->output(true, 'Success', $photo, null);
        } else {
            return $this->res->output(false, 'photo not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Photorequest $request, $id)
    {
        $photo = Photo::find($id);
        if ($photo !== null) {
            $p = $request->file('name')->store('photos');
            $photo->name = $p;
            $photo->save();
        }else{
            return $this->res->output(false, 'photo not found', [], null);
        }
        return $this->res->output(true, 'Successfully updated', $photo, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $photo = Photo::find($id);
        if ($photo !== null) {
            Photo::destroy($id);
        } else {
            return $this->res->output(false, 'photo not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }



}
