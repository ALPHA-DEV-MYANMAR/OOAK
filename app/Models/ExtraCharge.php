<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExtraCharge extends Model
{
    use HasFactory;
    protected $hidden = [
        'created_at',
        'updated_at',
        'id'
    ];

    protected $fillable = [
        'cod_charge',
        'delivery_discount_threshold',
        'reduce_cod_charge',
    ];
}
