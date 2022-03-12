<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\CustomerResource;
use App\library\CusResponse;
use App\Models\User;
use App\Models\Profile;
use App\Models\Address;
use App\Models\OptCode;
use Carbon\Carbon;
use Hash;

class AdminCustomerController extends Controller
{
    public function __construct()
    {
        $this->res = new CusResponse();
        auth()->setDefaultDriver('api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $per_page = ($request->per_page == null) ? 10 : $request->per_page;
        $order_by = ($request->order_by == null) ? 'id' : $request->order_by;
        $order = ($request->order == null) ? 'asc' : $request->order;
        $customers = User::where('user_type', 'customer')->with(['profile.gender', 'address.state'])
            ->orderBy($order_by, $order)
            ->paginate($per_page);
        return $this->res->output(
            true,
            'success',
            $customers,
            null
        );
    }

    public function name_only()
    {
        $customers = User::where('user_type', 'customer')->select('id', 'name')->get();
        return $this->res->output(
            true,
            'success',
            $customers,
            null
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = User::find($id);
        if ($customer !== null) {
            $profile = Profile::where('user_id', $customer->id)->first();
            $address = Address::where('user_id', $customer->id)->first();
            if ($profile !== null) {
                $profile->delete();
            }
            if ($address !== null) {
                $address->delete();
            }
            $customer->delete();
        } else {
            return $this->res->output(false, 'Customer not found', [], null);
        }
        return $this->res->output(true, 'Customer successfully deleted', [], null);
    }
}
