<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerRequest;
use Illuminate\Http\Request;
use App\Http\Resources\CustomerResource;
use App\library\CusResponse;
use App\Models\User;
use App\Models\Profile;
use App\Models\Address;
use App\Models\OptCode;
use Carbon\Carbon;
use Hash;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
    }



    public function store(CustomerRequest $request)
    {

        $customer = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'phone_no' => $request['phone_no'],
            'user_type' =>  'customer',
            'password' => Hash::make($request['password']),
        ]);
        if ($customer !== null) {
            $profile = Profile::where('user_id', $customer->id)->first();
            if ($profile === null) {
                $request->query->set('user_id', $customer->id);
                $profile = new Profile;
            }
            $profile->fill($request->all());
            $profile->save();

            $address = Address::where('user_id', $customer->id)->first();
            if ($address === null) {
                $address = new Address;
            }
            $address->fill($request->all());
            $address->save();


            $token = $customer->createToken('auth_token')->plainTextToken;
            $code = OptCode::where('user_id', $customer->id)->first();
            if ($code === null) {
                $code = new OptCode;
                $code->user_id = $customer->id;
            }
            $code->code = rand(1000, 9999);
            $code->created_at = Carbon::now();
            $code->save();
            event(new \App\Events\RegisterOpt($customer, $code));

            //send email
            $customer->load(['profile.gender', 'address.state']);
        } else {
            return $this->res->output(false, 'Customer not found', [], null);
        }
        return $this->res->output(true, 'Customer successfully created', array(
            'access_token' => $token,
            'data' => new CustomerResource($customer),
            'token_type' => 'Bearer'
        ), null);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = User::find($id);
        if ($customer !== null) {
            $customer->load(['profile.gender', 'address.state']);
        } else {
            return $this->res->output(false, 'Customer not found', [], null);
        }
        return $this->res->output(true, 'success', new CustomerResource($customer), null);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {        
        $customer = User::find($id);
        if ($request->gender_id == '') {
            $request->query->set('gender_id', 1);
        }
        // if($request->state_id == '')
        // {
        //     $request->query->set('state_id', 1);
        // }
        if ($request->birthday == '') {
            $request->query->set('birthday', Carbon::now()->subYears(20));
        }
        if ($request->state_id == '') {
            $request->query->set('state_id', 1);
        }
        if($request['password'] != "")
        {
            $password = Hash::make($request['password']);
            $request->merge(['password' => $password]);
        }

        if ($customer !== null) {
            $customer->fill($request->all());
            $customer->save();
            $profile = Profile::where('user_id', $customer->id)->first();
            if ($profile === null) {
                $profile = new Profile;
                $request->query->set('user_id', $customer->id);
            }
            $profile->fill($request->all());
            $profile->save();

            $address = Address::where('user_id', $customer->id)->first();
            if ($address === null) {
                $address = new Address;
            }
            $address->fill($request->all());
            $address->save();
            $token = $customer->createToken('auth_token')->plainTextToken;
            $customer->load(['profile.gender', 'address.state']);
        } else {
            return $this->res->output(false, 'Customer not found', [], null);
        }
        return $this->res->output(true, 'Customer successfully updated', array(
            'access_token' => $token,
            'data' => new CustomerResource($customer),
            'token_type' => 'Bearer'
        ), null);
    }
}
