<?php

namespace App\Http\Controllers\SellerController;
use App\Models\Category;
use App\Models\Product as ModelsProduct;
use App\Http\Controllers\Controller;
use App\Models\VariationProduct;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
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

     public function create()
    {
        return Inertia::render('Seller/Product/Create', [
            'categories' => Category::all(),
        ]);
    }
     public function archive(ModelsProduct $product)
    {
        $product->update(['status' => 3]);
    }

    public function live(ModelsProduct $product)
    {
        $product->update(['status' => 1]);
    }

    public function destroy(ModelsProduct $product)
    {
        $product->delete();

        // Get the product images
        $images = json_decode($product->images);

        // Delete the product images
        foreach ($images as $image) {
            File::delete('storage/' . $image);
        }
    }

    public function store(Request $request, $status)
    {
        $request->validate([
            'images' => 'required',
        ], [
            'images.required' => 'Gambar produk wajib diunggah.',
        ]);

        // Proses gambar
        $images = [];
        if ($request->file('images')) {
            foreach ($request->file('images') as $key => $image) {
                $newFileName = 'furnifind' . time() . '_' . ($key + 1) . '.' . $image->getClientOriginalExtension();
                $images[$key] = $image->storeAs('product', $newFileName, 'public');
            }
        }

        // Data produk yang akan disimpan
        $productData = [
            'title' => $request->title,
            'slug' => SlugService::createSlug(ModelsProduct::class, 'slug', $request->title),
            'seller_id' => auth()->user()->id,
            'category_id' => $request->category_id,
            'description' => $request->description,
            'images' => json_encode($images),
            'status' => $status,
            'verify' => 0
        ];

        // Jika produk tidak memiliki variasi
        if (empty($request->variation)) {
            $request->validate([
                'price' => 'required|integer|min:99',
                'stock' => 'required',
            ], [
                'price.required' => 'Harga produk wajib diisi.',
                'price.integer' => 'Harga produk harus berupa angka.',
                'price.min' => 'Harga produk minimal Rp.99.',
                'stock.required' => 'Stok produk wajib diisi.',
            ]);

            $productData['price'] = $request->price;
            $productData['stock'] = $request->stock;
            $createdProduct = ModelsProduct::create($productData);
        } else {
            // Jika produk memiliki variasi
            $createdProduct = ModelsProduct::create($productData);
            foreach ($request->variation as $key => $item) {
                $variationData = [
                    'product_id' => $createdProduct->id,
                    'name' => $item['name'],
                    'stock' => $item['stock'],
                    'price' => $item['price'],
                ];
                VariationProduct::create($variationData);
            }
        }

        return redirect('/seller/product/list/all');
    }
}