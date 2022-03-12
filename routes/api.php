<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Admin\{
    AdminPromocodeController,
    AdminFavoriteController,
    AdminOrderController,
    AdminCartController,
    AdminExpiredController,
    AdminExtrachargeController,
    AdminPaymentMethodController,
    AdminOrderSummaryController,
    AdminGoodController,
    AdminAvalColorController,
    AdminAvalOptionController,
    AdminAvalSizeController,
    AdminAvalWeightController,
    AdminBrandController,
    AdminCategoryController,
    AdminCustomerController,
    AdminDeliverAcceptTimeController,
    AdminDeliveryAgentController,
    AdminPhotoController,
    AdminPriceController,
    AdminPromotionController,
    AdminStateController,
    AdminUnitController,
    AdminOrderStatusController,
    AdminOrderItemController,
    AdminPointController,
    AdminGenderController
};


Route::prefix('v1')->group(function () {
    @require_once('includes/mobile_route.php');
});

Route::post("admin/v1/login", function () {
    $data =  request()->all();
    $password =  $data['password'];
    $email =  $data['email'];
    if (Auth::guard('web')->attempt(array('email' => $email, 'password' => $password))) {
        $user = App\Models\User::where('email', $email)->with(['profile.gender', 'address.state', 'roles'])->first();
        // Create token payload as a JSON string
        $payload = json_encode(['user_id' => $user->id]);
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
        // Encode Header to Base64Url String
        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));

        // Encode Payload to Base64Url String
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

        // Create Signature Hash
        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, env("JWT_SECRET"), true);

        // Encode Signature to Base64Url String
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

        // Create JWT
        $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

        $roles = $user->roles;
        $roles = collect($roles)->map(function ($q) {
            return $q->name;
        })->toArray();

        if (in_array('Merchant', $roles)) {
            $role = 'Merchant';
        }
        if (in_array('Administrator', $roles)) {
            $role = 'Administrator';
        }

        if (in_array('Administrator', $roles) || in_array('Merchant', $roles)) {
            $userarray =     array(
                "id" => $user->id,
                "fullName" => $user->name,
                "username" => $user->name,
                "password" => $user->name,
                // eslint-disable-next-line global-require
                "avatar" => '/images/_/_/_/_/points/resources/js/src/assets/images/avatars/13-small.png',
                "email" => $user->email,
                "role" => $role,
                "ability" => array(
                    array(
                        "action" => 'manage',
                        "subject" => 'all',
                    )

                ),

                "extras" =>  array(
                    "eCommerceCartItemsCount" => 5,
                ),
            );

            $response = array(
                "userData" =>  $userarray,
                "accessToken" => $jwt,
                "refreshToken" => $jwt,
            );
            return $response;
        }
    }
});

Route::prefix('admin/v1/')->group(function () {
    Route::get('gender', [AdminGenderController::class, "index"]);
    Route::apiResource('aval_colors', AdminAvalColorController::class);
    Route::apiResource('aval_options', AdminAvalOptionController::class);
    Route::apiResource('aval_sizes', AdminAvalSizeController::class);
    Route::apiResource('brand', AdminBrandController::class);
    Route::apiResource('states', AdminStateController::class);
    Route::get('customers/name_only', [AdminCustomerController::class, 'name_only']);
    Route::apiResource('customers', AdminCustomerController::class);
    Route::apiResource('categories', AdminCategoryController::class);
    Route::apiResource('units', AdminUnitController::class);
    Route::apiResource('carts', AdminCartController::class);
    Route::apiResource('aval_weights', AdminAvalWeightController::class);
    Route::apiResource('prices', AdminPriceController::class);
    Route::apiResource('goods', AdminGoodController::class);
    Route::get('goods_with_expired', [AdminGoodController::class, 'expired']);
    Route::get('checkStock', [AdminGoodController::class, 'checkStock']);    
    Route::get('checkStock2', [AdminGoodController::class, 'checkStock2']);    
    Route::apiResource('photos', AdminPhotoController::class);
    Route::get('orders/summary_count', [AdminOrderController::class, 'summaryCount']);
    Route::apiResource('orders', AdminOrderController::class);
    Route::apiResource('order_status', AdminOrderStatusController::class);
    Route::apiResource('order_items', AdminOrderItemController::class);
    Route::apiResource('promotions', AdminPromotionController::class);
    Route::apiResource('favorites', AdminFavoriteController::class);
    Route::apiResource('promos', AdminPromocodeController::class);
    Route::apiResource('delivery_agents', AdminDeliveryAgentController::class);
    Route::apiResource('payment_methods', AdminPaymentMethodController::class);
    Route::apiResource('deliver_accept_times', AdminDeliverAcceptTimeController::class);
    Route::apiResource('expired', AdminExpiredController::class);
    Route::apiResource('order_summary', AdminOrderSummaryController::class);
    Route::apiResource('points', AdminPointController::class)->except('update','delete');
    Route::post('points/status', [AdminPointController::class,"status"]);  
    Route::get("payment_policy", [PaymentPolicyController::class, "index"]);
    Route::get("delivery_and_return_policy", [DeliveryAndReturnPolicyController::class, "index"]);
    Route::get('extra_charge', [AdminExtrachargeController::class, 'show']);
    Route::put('extra_charge', [AdminExtrachargeController::class, 'update']);
    Route::get('goods/increase_view_count/{id}', [AdminGoodController::class, 'increaseViewCount']);
});
