<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Pending extends Model
{
    use HasFactory;
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'price_id',
        'expired_date',
        'order_id',
        'qty'
    ];

    public function order()
    {
        return $this->hasOne(Order::class, 'id', 'order_id');
    }
    public function price()
    {
        return $this->hasOne(Price::class, 'id', 'price_id');
    }




}
