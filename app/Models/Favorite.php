<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Favorite extends Model
{
    use HasFactory;

    public function good()
    {
        return $this->hasOne(Good::class, 'id', 'good_id');
    }
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
