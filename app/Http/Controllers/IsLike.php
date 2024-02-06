<?php

namespace App\Http\Controllers;

use App\Models\Product;

class IsLike extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Product $product)
    {
        $product->likes()->toggle(auth()->id());
    }
}