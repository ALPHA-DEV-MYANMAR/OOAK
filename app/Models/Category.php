<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Category extends Model
{
    use HasFactory;


    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function sub_categories()
    {
        return $this->hasMany(Category::class, 'parent', 'id');
    }
    public function parent_category()
    {
        return $this->hasOne(Category::class, 'id', 'parent');
    }
}
