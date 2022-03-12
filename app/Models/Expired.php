<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;


class Expired extends Model
{
    use HasFactory;
    protected $hidden = [
        'updated_at',
    ];


    protected $fillable = [
        'price_id',
        'expired_date',
        'ori_price',
        'qty',
        'trash',
        'ori'
    ];
    protected $appends = [
        'pending',
    ];

    public function setExpiredDateAttribute($value)
    {
        try {
            $this->attributes['expired_date'] = new Carbon($value);
        } catch (\Exception $exception) {
            $this->attributes['expired_date'] = now();
        }
    }
    public function getTotalQtyAttribute()
    {
        $sum = 0;
        $total = Expired::where('price_id', $this->price_id)->sum('qty');
        if ($total != null) {
            $sum = $total;
        }
        return  $this->attributes['total_qty'] = $sum;
    }
    public function setQtyAttribute($value)
    {
        try {
            $this->attributes['ori'] = $value;
            $this->attributes['qty'] = $value;
        } catch (\Exception $exception) {
            $this->attributes['ori'] = 0;
            $this->attributes['qty'] = 0;
        }
    }
    public function getPendingAttribute()
    {
        $pending = Pending::where('price_id', $this->price_id)->whereHas("order" , function($q){
            return  $q->whereNotIn('order_status_id',["4","5","6","7"]);
         })->sum('qty');


        try {
            $this->attributes['pending'] = $pending;
        } catch (\Exception $exception) {
            $this->attributes['pending'] = 0;
        }
        return  $this->attributes['pending'] = $pending;
    }

    public function price()
    {
        return $this->hasOne(Price::class, 'id', 'price_id');
    }
}
