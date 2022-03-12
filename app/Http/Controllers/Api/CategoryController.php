<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\library\CusResponse;

class CategoryController extends Controller
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
        if ($request->sub_categories_only == 'yes') {
            $categories = Category::where('parent', '>', 0);
            if ($request->parent_category == 'yes') {
                $categories = $categories->with('parent_category');
            }
        } else {
            $categories = Category::where('parent', 0);
            if ($request->sub_categories == 'yes') {
                $categories = $categories->with('sub_categories');
            }
        }


        $categories = $categories->get();
        return $this->res->output(true, 'success', $categories, null);
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $category = Category::where('id', $id);


        if ($request->sub_categories_only == 'yes') {
            $category  = $category->where('parent', '>', 0);
            if ($request->parent_category == 'yes') {
                $category = $category->with('parent_category');
            }
        } else {
            $category  = $category->where('parent', 0);
            if ($request->sub_categories == 'yes') {
                $category  = $category->with('sub_categories');
            }
        }
        $category = $category->first();

        if ($category === null) {
            $category = Category::where('id', $id)->first();
            return $this->res->output(true, 'Success', $category, null);
            if ($category === null) {
                return $this->res->output(false, 'Category not found', [], null);
            }
        }
        return $this->res->output(true, 'Success', $category, null);
    }
}
