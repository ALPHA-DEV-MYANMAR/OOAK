@component('mail::message')
# Hello **{{$user->name}}**

**{{ config('app.name') }}**  မှ Order မှာယူအားပေးမှုအတွက် အထူးကျေးဇူးတင်ရှိပါတယ်။ လူကြီးမင်း မှာယူသော Order စာရင်းအတိုင်း delivery အပ်ပေးခြင်း ပြီး‌ဆုံးပါပြီ။ 
delivery ပို့ဆောင်မှုအခြေအနေကို delivery tracking ID နှင့် စစ်ဆေးလို့ရပါသည်။

@if($order->delivery_tracking_code)
Tracking Code : {{$order->delivery_tracking_code}}

@if($order->delivery_agent != null)
@component('mail::button', ['url' => $order->delivery_agent->link])
Order Tracking Website
@endcomponent
@endif

@endif

@php

$order_datas = new App\library\OrderLibrary();
$order_datas = $order_datas->total($order, $user);
$total = $order_datas['total'];
$final_total = $order_datas['final_total'];
$promo = $order_datas['promo'];
$cod = $order_datas['extra_charge_cod'];
$address = $order_datas['address'];

@endphp

@include('mails.includes.order',array('order'=>$order))

## သတိပြုရန်အချက်များ

1. Delivery အပ်ပြီးတဲ့နေ့မှ စပြီး လူကြီးမင်း ရဲ့ လိပ်စာကိုရောက်ရန် ၃ ရက်ခန့်ကြာနိင်ပါသည်။
2. ရာသီဥတုနှင့် အခြေအနေပေါ် မူတည်ပြီး ၂ ရက်ခန့် ထပ်တိုးကြာတာမျိုးလည်း ဖြစ်နိင်ပါသည်။
3. Tracking ID ကို Tracking website ထဲရိုက်ထည့်ပေးခြင်းဖြင့် လူကြီးမင်းရဲ့ ပါဆယ် အခြေအနေကို ကြည့်လိုရပါသည်။
4. လူကြီးမင်းရဲ့ order ကိုလာပို့တဲ့အချိန် လက်ခံမည့်သူမရှိပါက delivery company မှ စာရွက်ထားသွားမည်ဖြစ်ပြီး၊ ထိုစာရွက် မှ ညွှန်ကြားထားသော နည်းလမ်းအတိုင်း လူကြီးမင်းရဲ့ ပါဆယ်ကို နောက်ရက် ချိန်းပြီး ထပ်လာပို့ခိုင်းဖို့ လုပ်ဆောင်နိင်ပါသည်။ အထက်ပါလုပ်ဆောင်ချက်ကို OOAK မှ လုပ်ဆောင်ခြင်းမပြုပေးပါ။
5. ရောက်ရှိလာသော လူကြီးမင်းရဲ့ Order နဲ့ပက်သက်ပြီး အဆင်မပြေမူတစ်စုံတစ်ရာကြောင့် ဆက်သွယ်လိုပါက OOAK facebook page မှတဆင့် ဆက်သွယ်ပေးပါရန်။
6. Return & Refund အတွက် စည်းကမ်းချက်များကို အောက်ပါ link မှတဆင့်ကြည့်ရှုနိင်ပါသည်။










@component('mail::button', ['url' => url('refund')])
Return & Refund အတွက် စည်းကမ်းချက်များ
@endcomponent

**{{ config('app.name') }}** မှ မန်ဘာဝင်ရောက်မှုအတွက် ကျေးဇူးအထူးတင်ရှိပါသည်။
<br />
@include('mails.includes.footer')

@endcomponent