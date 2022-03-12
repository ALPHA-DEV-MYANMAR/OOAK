<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Hash;
use Auth;
use App\Http\Requests\UserRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\OptCode;
use App\Models\Point;
use App\library\CusResponse;
use Carbon\Carbon;


class UserController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
    }
    public function register(UserRequest $request)
    {
        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'phone_no' => $request['phone_no'],
            'user_type' => $request['user_type'] != null ? $request['user_type'] : 'staff',
            'password' => Hash::make($request['password']),
        ]);

        if ($user !== null) {
            $code = OptCode::where('user_id', $user->id)->first();
            if ($code === null) {
                $code = new OptCode;
                $code->user_id = $user->id;
            }
            $code->code = rand(1000, 9999);
            $code->created_at = Carbon::now();
            $code->save();
            event(new \App\Events\RegisterOpt($user, $code));
            $this->checkPoint($user);
            //send email
            $token = $user->createToken('auth_token')->plainTextToken;
            return $this->res->output(true, 'sent_opt', array(
                'access_token' => $token,
                'data' => null,
                'token_type' => 'Bearer'
            ), null);
        } else {
            return $this->res->output(false, 'fail', [], null);
        }
    }

    public function validate_opt(Request $request)
    {

        $user = $request->user();
        $code = $request->code;
        if ($user !== null) {
            $user->load(['profile.gender','address.state']);
            $c = OptCode::where('user_id', $user->id)->where('code', $code)->first();

            if ($c === null) {

                $token = $user->createToken('auth_token')->plainTextToken;
                return $this->res->output(false, 'OPT code not match (or) Expired ', array(
                    'access_token' => $token,
                    'data' => null,
                    'token_type' => 'Bearer'
                ), null);
            }

            $user->active = 1;
            $user->save();

            $c->delete();

            $token = $user->createToken('auth_token')->plainTextToken;
            
            return $this->res->output(true, 'success', array(
                'access_token' => $token,
                'data' => $user,
                'token_type' => 'Bearer'
            ), null);
        } else {
            return $this->res->output(false, 'user not found', [], null);
        }
    }
    public function resend_opt(Request $request)
    {

        $user = $request->user();
        if ($user !== null) {
            $user->load(['profile.gender','address.state']);
            $c = OptCode::where('user_id', $user->id)->first();
            if ($c === null) {

                $code = new OptCode;
                $code->user_id = $user->id;
                $code->code = rand(1000, 9999);
                $code->created_at = Carbon::now();
                $code->save();
                $c = $code;
            }

            event(new \App\Events\RegisterOpt($user, $c));

            return $this->res->output(true, 'success ', array(
                'data' => $user,
                'token_type' => 'Bearer'
            ), null);


        } else {
            return $this->res->output(false, 'user not found', [], null);
        }
    }

    public function forget_password(Request $request)
    {

        $email = $request->email;
        if($email != null)
        {
            $user = User::where('email',$email)->first();
            if ($user !== null) {
                $user->load(['profile.gender','address.state']);
                $c = OptCode::where('user_id', $user->id)->first();
                if ($c === null) {
                    $code = new OptCode;
                    $code->user_id = $user->id;
                    $code->code = rand(1000, 9999);
                    $code->created_at = Carbon::now();
                    $code->save();
                    $c = $code;
                }
                event(new \App\Events\ForgetPassword($user, $c));
                $token = $user->createToken('auth_token')->plainTextToken;
                return $this->res->output(true, 'success ', array(
                    'access_token' => $token,
                    'data' => $user,
                    'token_type' => 'Bearer'
                ), null);
            }
        }



    }

    public function validate_reset_password_opt(Request $request)
    {

        $user = $request->user();
        $code = $request->code;
        if ($user !== null) {
            
            $c = OptCode::where('user_id', $user->id)->where('code', $code)->first();
            $token = $user->createToken('auth_token')->plainTextToken;
            if ($c === null) {
                $user->load(['profile.gender','address.state']);
                
                return $this->res->output(false, 'OPT code not match (or) Expired ', array(
                    'access_token' => $token,
                    'data' => null,
                    'token_type' => 'Bearer'
                ), null);
            }
            if(Str::length($request['password'])< 8 )
            {
                return $this->res->output(false, 'Password is to short, It should be atleast 8 character ', array(
                    'access_token' => $token,
                    'data' => null,
                    'token_type' => 'Bearer'
                ), null);
            }

            if($request['password'] !== $request['password_confirmation'])
            {
                return $this->res->output(false, 'Password don\'t match ', array(
                    'access_token' => $token,
                    'data' => null,
                    'token_type' => 'Bearer'
                ), null);
            }

            $user->password = Hash::make($request['password']);
            $user->save();
            $c->delete();

            $token = $user->createToken('auth_token')->plainTextToken;
            
            return $this->res->output(true, 'success', array(
                'access_token' => $token,
                'data' => $user,
                'token_type' => 'Bearer'
            ), null);
        } else {
            return $this->res->output(false, 'user not found', [], null);
        }
    }

    public function login(LoginRequest $request)
    {
        $user = null;
        if (Auth::guard('web')->attempt(array('email' => $request->email, 'password' => $request->password))) {
            $user = User::where('email', $request->email)->with(['profile.gender', 'address.state','roles'])->first();
            if ($user !== null) {
                $user->gender_id = 2;
                $user->birthday ="2001-11-22";
                if($user->profile->gender != null)
                {
                    $user->gender_id = $user->profile->gender->id;
                    $user->birthday = $user->profile->birthday;
                }
                //$user->tokens()->where('tokenable_id', $user->id)->delete();
                $token = $user->createToken('auth_token')->plainTextToken;
            }
            if ($user->active == 0) {
                return $this->res->output(true, 'please_verify_opt_first', array(
                    'access_token' => $token,
                    'data' => null,
                    'token_type' => 'Bearer'
                ), null);
            }

        } else {
            return $this->res->output(false, 'email or password are incorrect', [], null);
        }
        $this->checkPoint($user);
        return $this->res->output(true, 'success', array(
            'access_token' => $token,
            'data' => $user,
            'token_type' => 'Bearer'
        ), null);
    }
    public function me(Request $request)
    {
        $user = $request->user();
        $this->checkPoint($user);
        return $this->res->output(true, 'success', $user, null);
    }

    public function checkPoint($user)
    {
        $point = Point::where('user_id',$user->id)->first();
        if($point === null)
        {
            $point = new Point;
            $point->user_id = $user->id;
            $point->status = "active";
            $point->point = 0;
            $point->save();
        }
        return true;
    }
}
