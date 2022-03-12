<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;
    protected $with = [
        'price',
        'order',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function order()
    {
        return $this->hasOne(Order::class, 'id', 'order_id');
    }
    public function price()
    {
        return $this->hasOne(Price::class, 'id', 'goods_price_id');
    }

}
