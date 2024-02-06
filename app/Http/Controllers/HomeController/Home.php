<?php

namespace App\Http\Controllers\HomeController;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Home extends Controller
{
    public function index(){
        return Inertia::render('Home/Index', [
            'products' => Product::with('variation')->get(),
            'categories' => Category::with('products')->get()
        ]);
    }
}