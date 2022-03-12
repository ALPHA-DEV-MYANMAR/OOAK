<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BrandRequest;
use App\Models\Brand;
use App\Models\Photo;
use App\library\CusResponse;

class AdminBrandController extends Controller
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
        $brands = Brand::get();
        return $this->res->output(true, 'success', $brands, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BrandRequest $request)
    {
        $photo = null;
        if ($request->hasFile('photo')) {
            $photo = new Photo;
            $p = $request->file('photo')->store('brands');
            $photo->name = $p;
            $photo->save();
        }

        $brand = new Brand;
        if ($photo !== null) {
            $brand->photo_id = $photo->id;
        }

        $brand->name = $request->name;
        $brand->save();
        $brand->load('photo');


        return $this->res->output(true, 'Successfully created', $brand, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $brand = Brand::find($id);
        if ($brand !== null) {
            return $this->res->output(true, 'success', $brand, null);
        } else {
            return $this->res->output(false, 'Brand not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BrandRequest $request, $id)
    {

        $photo = null;
        if ($request->hasFile('photo')) {
            $photo = new Photo;
            $p = $request->file('photo')->store('brands');
            $photo->name = $p;
            $photo->save();
        }

        $brand = Brand::find($id);
        if ($photo !== null) {
            $brand->photo_id = $photo->id;
        }

        $brand->name = $request->name;
        $brand->save();
        $brand->load('photo');
        return $this->res->output(true, 'Successfully updated', $brand, null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $brand = Brand::find($id);
        if ($brand !== null) {
            Brand::destroy($id);
        } else {
            return $this->res->output(true, 'Brand not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
