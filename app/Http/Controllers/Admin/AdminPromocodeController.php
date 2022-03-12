<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\PromoRequest;
use App\Models\PromoCode;
use App\library\CusResponse;
use App\Models\Category;

class AdminPromocodeController extends Controller
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
        $per_page = request()->per_page ? request()->per_page : 15;
        $category_id = request()->category_id ? request()->category_id : null;
        $orderBy = request()->orderBy ? request()->orderBy : 'id';
        $sorting = request()->sorting ? request()->sorting : 'desc';
        $start_date = request()->start_date ? request()->start_date : null;
        $expired_date = request()->expired_date ? request()->expired_date : null;
        $limit_full = request()->limit_full ? request()->limit_full : 'no';

        $promos = PromoCode::with('categories');

        if ($category_id != null) {
            $promos = $promos->whereHas('categories', function ($q) use ($category_id) {
                $q->where('category_ids', $category_id);
            });
        }
        if ($start_date != null) {
            $promos = $promos->where('start_date', '>=', $start_date);
        }
        if ($expired_date != null) {
            $promos = $promos->where('expired_date', '<=', $expired_date);
        }
        if ($limit_full == 'yes') {
            $limit_full = $promos->whereColumn('count','used');
        }
        $promos = $promos->orderBy($orderBy, $sorting)->with('users')->paginate($per_page);
        return $this->res->output(true, 'success', $promos, null);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PromoRequest $request)
    {

        $promo = new PromoCode;
        $promo->fill($request->all());
        $promo->save();
        $categories = $request->category_ids;
        if (empty($categories)) {
            $categories = Category::pluck('id');
        }
        $promo->categories()->detach();
        $promo->categories()->attach($categories);
        $promo->load('categories');
        return $this->res->output(true, 'Successfully created', $promo, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $promo = PromoCode::with('categories')->find($id);
        if ($promo !== null) {
            return $this->res->output(true, 'Success', $promo, null);
        } else {
            return $this->res->output(false, 'promo not valid', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PromoRequest $request, $id)
    {
        $promo = PromoCode::find($id);
        if ($promo !== null) {
            $promo->fill($request->all());
            $promo->save();
            $categories = $request->category_ids;
            if (empty($categories)) {
                $categories = Category::pluck('id');
            }
            $promo->categories()->detach();
            $promo->categories()->attach($categories);
            $promo->load('categories');
            return $this->res->output(true, 'Successfully updated', $promo, null);
        } else {
            return $this->res->output(false, 'promo not found', [], null);
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
        $promo = PromoCode::find($id);
        if ($promo !== null) {
            PromoCode::destroy($id);
        } else {
            return $this->res->output(false, 'promo not found', $promo, null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }
}
