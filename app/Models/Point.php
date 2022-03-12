<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Point extends Model
{
    use HasFactory;
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->hasOne(User::class,'id','user_id');
    }
}
