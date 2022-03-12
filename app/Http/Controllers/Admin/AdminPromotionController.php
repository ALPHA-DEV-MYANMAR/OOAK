<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PromotionRequest;
use App\library\CusResponse;
use App\Models\Promotion;
use App\Models\Photo;

class AdminPromotionController extends Controller
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
        $publish = request()->publish ? request()->publish : 'yes';
        $promotions = Promotion::orderBy('id', 'desc');

        if ($publish != 'all') {
            $promotions = $promotions->where('publish', $publish);
        }
        $promotions = $promotions->with('photo')->get();

        return $this->res->output(true, 'success', $promotions, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PromotionRequest $request)
    {
        $publish = request()->publish ? request()->publish : 'yes';
        $photo = new Photo;
        $p = $request->file('photo')->store('promotions');
        $photo->name = $p;
        $photo->save();
        if ($photo !== null) {
            $promotion = new Promotion;
            $promotion->name = $request->name;
            $promotion->photo_id = $photo->id;
            $promotion->url = $request->url;
            $promotion->publish = $publish;
            $promotion->save();
        } else {
            return $this->res->output(false, 'Can\'t create Promotion', null, null);
        }
        $promotion->load('photo');
        return $this->res->output(true, 'Successfully created', $promotion, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $promotion = Promotion::find($id);
        $promotion->load('photo');
        if ($promotion !== null) {
            return $this->res->output(true, 'success', $promotion, null);
        } else {
            return $this->res->output(false, 'Promotion not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PromotionRequest $request, $id)
    {
        $publish = request()->publish ? request()->publish : 'yes';
        $promotion = Promotion::find($id);
        if ($promotion !== null) {
            if ($request->file('photo') != null) {
                $photo = new Photo;
                $p = $request->file('photo')->store('promotions');
                $photo->name = $p;
                $photo->save();
                $promotion->photo_id = $photo->id;
            }

            $promotion->name = $request->name;
            $promotion->url = $request->url;
            $promotion->publish =  $publish;
            $promotion->save();
            $promotion->load('photo');
        } else {
            return $this->res->output(true, 'Promotion not found', [], null);
        }
        return $this->res->output(true, 'Successfully updated', $promotion, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $promotion = Promotion::find($id);
        if ($promotion !== null) {
            Promotion::destroy($id);
        } else {
            return $this->res->output(true, 'Promotion not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
