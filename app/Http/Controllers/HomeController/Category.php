<?php

namespace App\Http\Controllers\HomeController;

use App\Http\Controllers\Controller;
use App\Models\Category as ModelsCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Category extends Controller
{
    public function index(){
        return Inertia::render('Home/Category/Index', [
            'categories' => ModelsCategory::with('products')->get()
        ]);
    }
}