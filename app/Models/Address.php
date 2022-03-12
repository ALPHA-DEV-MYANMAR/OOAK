<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    public $cacheFor = 3600;

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'user_id',
        'postal_code',
        'state_id',
        'address'
    ];

    public function state()
    {
        return $this->hasOne(State::class, 'id', 'state_id');
    }
    public function setPostalCodeAttribute($value)
    {
        try {
            $value = str_replace("-", "", $value);
            $this->attributes['postal_code'] = $value;
        } catch (\Exception $exception) {
            $this->attributes['expired_date'] = $value;
        }
    }
}
