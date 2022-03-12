<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Photo extends Model
{
    use HasFactory;

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function getNameAttribute()
    {
        if (empty($this->attributes['name'])) {
            return null;
        }
        $url = "https://s3." . env('AWS_DEFAULT_REGION') . ".amazonaws.com/" . env('AWS_BUCKET') . "/{$this->attributes['name']}";
        return $url;
    }
}
