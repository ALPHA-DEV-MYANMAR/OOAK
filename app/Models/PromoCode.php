<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class PromoCode extends Model
{
    use HasFactory;


    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $fillable = [
        'code',
        'count',
        'used',
        'start_date',
        'expired_date',
        'price'
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'promo_codes_category_relations', 'code_id', 'category_ids');
    }
    public function users()
    {
        return $this->belongsToMany(User::class, 'promo_codes_users_relations', 'code_id', 'user_id');
    }
}
