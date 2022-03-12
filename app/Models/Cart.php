<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Cart extends Model
{
    use HasFactory;
    // public $cacheFor = 3600;

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'user_id',
        'price_id',
        'qty'
    ];
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    public function price()
    {
        return $this->hasOne(Price::class, 'id', 'price_id');
    }
}
