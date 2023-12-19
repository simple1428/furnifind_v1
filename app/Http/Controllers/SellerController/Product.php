<?php

namespace App\Http\Controllers\SellerController;
use App\Models\Category;
use App\Models\Product as ModelsProduct;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Product extends Controller
{
     // Menampilkan halaman daftar produk
     public function index()
     {
         return Inertia::render('Seller/Product/Index', [
             'products' => ModelsProduct::with('variation')->get(),
             'categories' => Category::with('products')->get()
         ]);
     }
}