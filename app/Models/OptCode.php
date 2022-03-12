<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OptCode extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'user_id',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
