<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Promotion extends Model
{
    use HasFactory;
    // public $cacheFor = 3600;

    public function photo()
    {
        return $this->hasOne(Photo::class, 'id', 'photo_id');
    }
}
