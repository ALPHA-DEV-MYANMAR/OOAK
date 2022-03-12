<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Order extends Model
{
    use HasFactory;


    protected $hidden = [
        'updated_at',
    ];
    protected $with = [
        'user',
        'photo',
        'status',
    ];

    protected $fillable = [
        'user_id',
        'photo_id',
        'order_id',
        'order_status_id',
        'delivery_agent_id',
        'delivery_tracking_code',
        'remark',
        'delivery_accepttime_id',
        'payment_method_id',
        'delivery_accepttime_date',
        'extra_charges_cod',
        'extra_charges_delivery',
        'promo_code_id'
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    public function photo()
    {
        return $this->hasOne(Photo::class, 'id', 'photo_id');
    }
    public function status()
    {
        return $this->hasOne(OrderStatus::class, 'id', 'order_status_id');
    }
    public function items()
    {
        return $this->hasMany(OrderItem::class, 'order_id', 'id');
    }
    public function logs()
    {
        return $this->hasMany(OrderLog::class, 'order_id', 'id');
    }
    public function delivery_agent()
    {
        return $this->hasOne(DeliveryAgent::class,  'id', 'delivery_agent_id');
    }
    public function delivery_accept_time()
    {
        return $this->hasOne(DeliveryAcceptTime::class, 'id', 'delivery_accepttime_id');
    }
    public function payment_method()
    {
        return $this->hasOne(PaymentMethod::class, 'id', 'payment_method_id');
    }
    public function promo()
    {
        return $this->hasOne(PromoCode::class, 'id', 'promo_code_id');
    }
    public function summary()
    {
        return $this->hasOne(OrderSummary::class, 'order_id', 'id');
    }
}
