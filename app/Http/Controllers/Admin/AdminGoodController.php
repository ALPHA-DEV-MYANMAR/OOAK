<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\GoodRequest;
use App\library\CusResponse;
use App\Models\Category;
use App\Models\Good;
use App\Models\Price;
use Carbon\Carbon;
use App\Models\Expired;

class AdminGoodController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
        $this->with = [
            'category.parent_category',
            'prices.expired'
        ];
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $per_page = request()->per_page ? request()->per_page : 15;
        $all = request()->all ? request()->all : 'no';
        $category_id = request()->category_id ? request()->category_id : null;
        $sub_category_id = request()->sub_category_id ? request()->sub_category_id : null;
        $orderBy = request()->orderBy ? request()->orderBy : 'id';
        $sorting = request()->sorting ? request()->sorting : 'desc';
        $recommend = request()->recommend ? request()->recommend : false;
        $max_price = request()->max_price ? request()->max_price : null;
        $min_price = request()->min_price ? request()->min_price : null;
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

        if ($recommend == 'true') {
            $goods = $goods->where('recommended_flag', '1');
        }

        if ($q !== null) {
            $goods = $goods->where('name', "like", "%" . $q . "%")->orWhere("description", "like", "%" . $q . "%");
        }
        $goods = $goods->with($this->with);
        // dd($goods);
        if ($all == 'no') {
            $goods = $goods->paginate($per_page);
        }
        if ($all == 'yes') {
            $count = Good::count();
            $goods = $goods->paginate($count);
        }


        return $this->res->output(true, 'success', $goods, null);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(GoodRequest $request)
    {
        $good = new Good;
        $good->fill($request->all());
        $good->save();
        $good->append('favourite');
        $good->append('favourite_id');
        $good->load(array('prices', 'photos', 'brand'));

        if (count($request->photo_ids) > 0) {
            $good->photos()->sync($request->photo_ids);
        }

        return $this->res->output(true, 'Successfully created', $good, null);
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
        if ($good !== null) {
            $good->append('favourite');
            $good->append('favourite_id');
            return $this->res->output(true, 'Success', $good, null);
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
        $good = Good::find($id);
        if ($good !== null) {
            $good->fill($request->all());
            $good->save();
            $good->load(array('prices', 'photos', 'brand'));

            if (count($request->photo_ids) > 0) {
                $good->photos()->sync($request->photo_ids);
            }
            $good->append('favourite');
            $good->append('favourite_id');
            return $this->res->output(true, 'Successfully updated', $good, null);
        }
        return $this->res->output(false, 'Good not found', [], null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $good = Good::find($id);
        if ($good !== null) {
            good::destroy($id);
        } else {
            return $this->res->output(false, 'Good not found', [], null);
        }
        return $this->res->output(true, 'Successfully deleted', [], null);
    }

    public function checkStock()
    {

        $price_id = request()->price_id ? request()->price_id : 'no';
        $start_date = request()->start_date ? request()->start_date : 'no';
        $end_date = request()->end_date ? request()->end_date : 'no';
        $per_page = request()->per_page ? request()->per_page : 15;
        $stock = request()->stock ? request()->stock : 'no';
        $expireds = Expired::with('price.good');

        if ($price_id != 'no') {
            $expireds = $expireds->where('price_id', $price_id);
        }

        if ($start_date != 'no') {
            $start_date = Carbon::parse($start_date);
            $expireds = $expireds->whereDate('created_at', '>=', $start_date);
        }
        if ($end_date != 'no') {
            $end_date = Carbon::parse($end_date);
            $expireds = $expireds->whereDate('created_at', '<=', $end_date);
        }

        $expireds = $expireds->where('trash', 'no');



        $expireds =  $expireds->paginate(2000);
        return $this->res->output(true, 'success', $expireds, null);

        // if ($stock != 'no') {
        //     $sums =  Expired::selectRaw("price_id,SUM(qty) as total_qty")
        //         ->groupBy('price_id')
        //         ->get()->toArray();
        // }        

    }

    public function checkStock2()
    {
        $goods = Good::with('prices.order_items.order','prices.pendings')->get();    
        return $this->res->output(true, 'success', $goods, null);
    }
}
