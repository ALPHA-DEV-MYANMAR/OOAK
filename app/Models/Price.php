<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Good;


class Price extends Model
{
    use HasFactory;

    protected $fillable = [
        'good_id',
        'aval_color_id',
        'aval_size_id',
        'aval_weight_id',
        'aval_option_id',
        'price',
        'quantity',
        'goods_width',
        'goods_height',
        'goods_length',
        'goods_weight'
    ];
    protected $with = [
        'aval_color',
        'aval_size',
        'aval_weight',
        'aval_option',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    protected $appends = [
        'stock',
    ];

    public function aval_color()
    {
        return $this->hasOne(AvalColor::class, 'id', 'aval_color_id');
    }
    public function aval_size()
    {
        return $this->hasOne(AvalSize::class, 'id', 'aval_size_id');
    }
    public function aval_weight()
    {
        return $this->hasOne(AvalWeight::class, 'id', 'aval_weight_id');
    }
    public function aval_option()
    {
        return $this->hasOne(AvalOption::class, 'id', 'aval_option_id');
    }
    public function good()
    {
        return $this->hasOne(Good::class, 'id', 'good_id');
    }
    public function getStockAttribute()
    {
        return $this->attributes['stock'] = $this->qty();;
    }
    public function order_items()
    {
        return $this->hasMany(OrderItem::class, 'goods_price_id', 'id');
    }

    public function pendings()
    {
        return $this->hasMany(Pending::class, 'price_id', 'id');
    }

    public function qty()
    {
        $ex = Expired::where('price_id', $this->id)->where('trash', 'no')->get();
        $qty = 0;
        foreach ($ex as $e) {
            $qty = $qty + $e->qty;
        }
        $price = Price::find($this->id);
        $price->quantity = $qty;
        $price->save();
        return $qty;
    }
    public function getQuantityAttribute()
    {
        return $this->attributes['quantity'] = $this->qty();
    }
    public function expired()
    {
        return $this->hasOne(Expired::class, 'price_id', 'id');
    }
}
