<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class OrderLog extends Model
{
    use HasFactory;
    // public $cacheFor = 3600;

    protected $hidden = [
        'updated_at',
        'id',
        'status_id'
    ];

    protected $fillable = [
        'order_id',
        'status_id',
    ];
    public function status()
    {
        return $this->hasOne(OrderStatus::class, 'id', 'status_id');
    }
}
