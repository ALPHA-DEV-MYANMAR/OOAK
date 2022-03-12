<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Favorite;
use App\Models\Expired;
use Carbon\Carbon;

class Good extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'sub_category_id',
        'unit_id',
        'brand_id',
        'recommended_flag',
        'onshop_flag'
    ];

    protected $with = [
        'prices',
        'photos',
        'brand',
        'unit',
        'category.parent_category'
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    protected $appends = [
        'total_stock',
    ];

    public function prices()
    {
        return $this->hasMany(Price::class, 'good_id', 'id');
    }
    public function photos()
    {
        return $this->belongsToMany(Photo::class, 'goods_photo_relations', 'good_id', 'photo_id');
    }
    public function brand()
    {
        return $this->hasOne(Brand::class, 'id', 'brand_id');
    }
    public function unit()
    {
        return $this->hasOne(Unit::class, 'id', 'unit_id');
    }
    public function category()
    {
        return $this->hasOne(Category::class, 'id', 'sub_category_id');
    }
    public function getFavouriteAttribute()
    {
        return $this->attributes['favourite'] =  (bool) $this->isUserFavaourite();
    }
    public function getFavouriteIDAttribute()
    {
        return $this->attributes['favourite_id'] =  $this->getFAvaouriteId();
    }

    public function getTotalStockAttribute()
    {
        $today = Carbon::now();
        $prices = Price::where('good_id', $this->id)->get();
        $qty = 0;
        foreach ($prices as $p) {
            $counts = Expired::where('price_id',$p->id)->whereDate('expired_date','>',$today)->get();
            foreach($counts as $c)
            {
                $qty =  $qty + $c->qty;
            }
            
        }
        return $this->attributes['total_stock'] = $qty;
    }

    public function isUserFavaourite()
    {
        if (request()->user() === null) {
            return (bool) false;
        } else {
            $user_id = request()->user()->id;
            $good_id  = $this->id;
            $fav = Favorite::where('user_id', $user_id)->where('good_id', $good_id)->first();
            if ($fav === null) {
                return (bool) false;
            } else {
                return (bool) true;
            }
        }
    }
    public function getFAvaouriteId()
    {
        if (request()->user() === null) {
            return null;
        } else {
            $user_id = request()->user()->id;
            $good_id  = $this->id;
            $fav = Favorite::where('user_id', $user_id)->where('good_id', $good_id)->first();
            if ($fav === null) {
                return null;
            } else {
                return (int) $fav->id;
            }
        }
    }
}
