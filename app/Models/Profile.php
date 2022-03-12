<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Profile extends Model
{
    use HasFactory;


    protected $hidden = [
        'created_at',
        'updated_at',
    ];


    protected $fillable = [
        'user_id',
        'gender_id',
        'birthday',
    ];

    public function gender()
    {
        return $this->hasOne(Gender::class, 'id', 'gender_id');
    }
}
