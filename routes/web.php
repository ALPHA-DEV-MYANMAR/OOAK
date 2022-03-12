<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\ApplicationController;
use \App\Http\Controllers\Admin\{
    RuleController
};
use \App\Http\Controllers\Api\{
    UserController,
    CustomerController,
    StateController,
    GenderController,
    CategoryController,
    UnitController,
    BrandController,
    AvalSizeController,
    AvalWeightController,
    AvalColorController,
    AvalOptionController,
    GoodController,
    CartController,
    OrderController,
    PhotoController,
    OrderStatusController,
    PromotionController,
    FavoriteController,
    PromocodeController,
    DeliveryAgentController,
    PaymentMethodController,
    DeliverAcceptTimeController,
    PaymentPolicyController,
    DeliveryAndReturnPolicyController,
    ExtraChargeController,
    BankInfoController
};
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{any}', [ApplicationController::class, 'index'])->where('any', '.*');


Route::get('/privacy-policy',[RuleController::class,'privacyPolicy']);
Route::get('/term-and-condition',[RuleController::class,'termsCondition']);
Route::get('/return-and-refund',[RuleController::class,'refund']);
Route::get('/how-to-payment-slip-upload',[RuleController::class,'refirm']);



Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::prefix('/admin')->name('admin.')->middleware(['role:Administrator'])->group(function(){
    //Login Routes
    //  Route::get('/register',[App\Http\Controllers\Admin\LoginController::class,'showRegisterForm']);
    //  Route::get('/login',[App\Http\Controllers\Admin\LoginController::class,'showLoginForm'])->name('login');
    //  Route::post('/login', [App\Http\Controllers\Admin\LoginController::class,'login']);
    //  Route::get('/logout', [App\Http\Controllers\Admin\LoginController::class,'logout'])->name('logout');
    //  Route::get('/home',[App\Http\Controllers\Admin\LoginController::class,'home']);
    Route::get('{any}', function () {
        return view('layouts.app');
    })->where('any', '.*')->middleware('auth');
     //category
    //  Route::get('{any}', function () {
    //     return view('layouts.app');
    // })->where('any', '.*')->middleware('admin');
});

Auth::routes(['register' => false]);

Route::domain('api.ooak.jp')->prefix('v1')->group(function () {
    Route::post('register', [UserController::class, "register"]);
    Route::post('login', [UserController::class, "login"]);    
    Route::get('gender', [GenderController::class, "index"]);
    Route::get('states', [StateController::class, "index"]);
    Route::get('customers/name_only', [CustomerController::class,'name_only']);
    Route::apiResource('customers', CustomerController::class)->except("index");    
    Route::apiResource('categories', CategoryController::class)->except("store,update,destroy");
    Route::get('units', [UnitController::class,"index"]);
    Route::get('brand', [BrandController::class,"index"]);
    Route::apiResource('carts', CartController::class);
    Route::get('aval_sizes', [AvalSizeController::class,"index"]);
    Route::get('aval_colors', [AvalColorController::class,"index"]);
    Route::get('aval_weights', [AvalWeightController::class,"index"]);
    Route::get('aval_options', [AvalOptionController::class,"index"]);
    Route::apiResource('goods', GoodController::class)->except("store,update,destroy");
    Route::get('goods/increase_view_count/{id}', [GoodController::class,'increaseViewCount']); 
    Route::apiResource('photos', PhotoController::class);
    Route::apiResource('orders', OrderController::class)->except("destroy");    
    Route::get('order_status', [OrderStatusController::class,"index"]);
    Route::apiResource('promotions', PromotionController::class)->only("index","show");
    Route::apiResource('favorites', FavoriteController::class);
    Route::apiResource('promos', PromocodeController::class)->only("show");
    Route::apiResource('delivery_agents', DeliveryAgentController::class)->only("index");
    Route::apiResource('payment_methods', PaymentMethodController::class)->only("index");
    Route::apiResource('deliver_accept_times', DeliverAcceptTimeController::class)->only("index");
    Route::get("payment_policy",[PaymentPolicyController::class,"index"]);
    Route::get("delivery_and_return_policy",[DeliveryAndReturnPolicyController::class,"index"]);
    Route::get("extra_charges",[ExtraChargeController::class,"index"]);  
    Route::get("bank-info",[BankInfoController::class,"index"]);  

    Route::middleware('auth:sanctum')->group(function(){
        Route::get('/me', [UserController::class, 'me']);
        Route::get("resend_opt",[UserController::class,"resend_opt"]);
        Route::post("validate_opt",[UserController::class,"validate_opt"]);   
        Route::post("validate_reset_password_opt",[UserController::class,"validate_reset_password_opt"]); 
        Route::get("points",[PointController::class,"getPoints"]);              
    });
    Route::post('/forget_password', [UserController::class, 'forget_password']);
});

