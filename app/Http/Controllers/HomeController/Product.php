<?php

namespace App\Http\Controllers\HomeController;

use Inertia\Inertia;
use App\Models\Product as ModelsProduct;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Seller;
use Illuminate\Database\Eloquent\Model;

class Product extends Controller
{
    private function getFeaturedProducts($userId)
    {
        return ModelsProduct::with(['category', 'likes','variation' ])
            ->get()
            ->each(function ($product) use ($userId) {
                $product->isLikedByUser = $product->likes->contains('id', $userId);
            });
    }
    public function index(){
        $userId = auth()->id();

        $featuredProducts = $this->getFeaturedProducts($userId);
        // dd($featuredProducts);
        return Inertia::render('Home/Product/Index', [
            'products' => $featuredProducts,
            'categories' => Category::with('products')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ModelsProduct $product)
    {
       // Load the product relationships (category, variation, and seller)
    $product = $product->load(['category', 'variation', 'seller','likes']);

    // Retrieve the seller associated with the product
    $seller = $product->seller;

    // Retrieve all products from the same seller
    $sellerProducts = $seller->products;

    return Inertia::render('Home/Product/Show', [
        'product' => $product,
        'seller' => $seller,
        'sellerProducts' => $sellerProducts->load(['category', 'variation' ]),
        'products' => ModelsProduct::with(['category', 'variation', 'seller','likes'])->get()
    ]);
    }
    public function popular()
    {
        return Inertia::render('Home/Product/Popular' );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}