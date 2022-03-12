<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Brand extends Model
{
    use HasFactory;

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    protected $with = [
        'photo',
    ];

    public function photo()
    {
        return $this->hasOne(Photo::class, 'id', 'photo_id');
    }
}
