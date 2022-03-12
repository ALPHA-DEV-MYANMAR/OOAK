<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\GoodRequest;
use App\library\CusResponse;
use App\Models\Category;
use App\Models\Good;
use Log;

class GoodController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
        $this->with = [
            'prices',
            'photos',
            'brand',
            'unit',
            'category.parent_category'
        ];
    }

    public function store()
    {
        
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       // $per_page = request()->per_page ? request()->per_page : 15;
       $per_page = 16;
        $all = request()->all ? request()->all : 'no';
        $category_id = request()->category_id ? request()->category_id : null;
        $sub_category_id = request()->sub_category_id ? request()->sub_category_id : null;
        $orderBy = request()->orderBy ? request()->orderBy : 'id';
        $sorting = request()->sorting ? request()->sorting : 'desc';
        $recommend = request()->recommended ? request()->recommended : false;
        $max_price = request()->max_price ? request()->max_price : null;
        $min_price = request()->min_price ? request()->min_price : null;
        $favourite = request()->favourite ? request()->favourite : false;
        $user = request()->user();
        $q = request()->q ? request()->q : null;

        if ($orderBy == 'price') {
            $goods = Good::join('prices', 'prices.good_id', '=', 'goods.id')
                ->select("goods.*", "prices.id as price_table_id")->orderBy('prices.price', $sorting);
        }

        if ($orderBy != 'price') {
            $goods = Good::orderBy($orderBy, $sorting);
        }
        

        if ($category_id != null) {
            $sub_category_ids = Category::where('parent', $category_id)->pluck("id");
            $goods = $goods->whereIn('sub_category_id', $sub_category_ids);
        }
        if ($sub_category_id != null) {
            $goods = $goods->where('sub_category_id', $sub_category_id);
        }

        if ($max_price !== null) {
            $goods = $goods->whereHas('prices', function ($q) use ($max_price) {
                return $q->where('price', '<=', $max_price);
            });
        }
        if ($min_price !== null) {
            $goods = $goods->whereHas('prices', function ($q) use ($min_price) {
                return $q->where('price', '>=', $min_price);
            });
        }

        if ($recommend != null) {
            $goods = $goods->where('recommended_flag', '1');
        }
        if ($favourite == 'true' && $user) {
            $user->load('favourites');
            $fav = array();
            foreach ($user->favourites as $f) {
                array_push($fav, $f->good_id);
            }
            $goods = $goods->whereIn('id', $fav);
        }
        if ($q !== null) {
            Log::info("search keyword '{$q}' ");
            $goods = $goods->where(function($query) use ($q){
                return $query->where('name', "like", "%" . $q . "%")->orWhere("description", "like", "%" . $q . "%");
            });
            
        }
        $goods = $goods->where('onshop_flag', '1');
        $goods = $goods->with($this->with);

        
        // dd($goods);
        if ($all == 'no') {
            $goods = $goods->paginate($per_page);
        }
        if ($all == 'yes') {
            $count = Good::count();
            $goods = $goods->paginate($count);
        }
        

        $goods->map(function ($g) {
            $g->append('favourite');
            $g->append('favourite_id');
        });
        
        return $this->res->output(true, 'success', $goods, null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $good = Good::find($id);
        $good = $good->load($this->with);
        if ($good !== null) {
            $good->append('favourite');
            $good->append('favourite_id');
            return $this->res->output(true, 'Success', $good, null);
        } else {
            return $this->res->output(false, 'Good not found', [], null);
        }
    }

    public function increaseViewCount($id)
    {
        $good = Good::find($id);
        $viewcount = ($good->view_count) ? $good->view_count : 0;
        $good->view_count =  (int) $viewcount + 1;
        $good->save();
        if ($good !== null) {
            $good->append('favourite');
            $good->append('favourite_id');
            return $this->res->output(true, 'Successfully increase view count', $good, null);
        } else {
            return $this->res->output(false, 'Good not found', [], null);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(GoodRequest $request, $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }
}
