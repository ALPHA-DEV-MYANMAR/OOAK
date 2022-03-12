<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;
    // public $cacheFor = 3600;
    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone_no',
        'user_type',
        'email_verified_at',
        'phone_no_verified_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $with = [
        'point',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        //'email_verified_at' => 'datetime',
        //'phone_no_verified_at' => 'datetime',
    ];

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
    public function point()
    {
        return $this->hasOne(Point::class);
    }
    public function address()
    {
        return $this->hasOne(Address::class,'user_id','id');
    }
    public function promos()
    {
        return $this->belongsToMany(PromoCode::class, 'promo_codes_users_relations', 'user_id', 'code_id');
    }

    public function favourites(){
        return $this->hasMany(Favorite::class, 'user_id', 'id');
    }

    public function carts(){
        return $this->hasMany(Cart::class, 'user_id', 'id');
    }


}
