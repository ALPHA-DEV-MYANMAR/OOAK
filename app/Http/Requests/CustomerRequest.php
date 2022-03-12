<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\library\CusResponse;

class CustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            //'phone_no' => [ 'string', 'max:15'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
            'gender_id' => ['required', 'integer'],
            'state_id' => ['required', 'integer'],
            //'postal_code' => ['integer'],
        ];
    }
    public function messages()
    {
        return [
            'name.required'     => 'A name for the customer is required.',
            'email.required'  => 'An Email is required to add customer.',
            'phone_no.required'  => 'Phone Number is required to add customer.',
            'gender_id.required'  => 'Gender is required to add customer.',
            'state_id.required'  => 'State is required to add customer.',
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $output = new CusResponse();
        if ($this->expectsJson()) {
            $errors = (new ValidationException($validator))->errors();
            throw new HttpResponseException(
                response()->json($output->output(false, "Validation fail", [], $errors)->original, 422)
            );
        }

        parent::failedValidation($validator);
    }
}
