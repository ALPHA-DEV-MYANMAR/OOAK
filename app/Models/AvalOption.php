<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class AvalOption extends Model
{
    use HasFactory;
    // public $cacheFor = 3600;
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
