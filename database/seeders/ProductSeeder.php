<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\Seller;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sellers = Seller::all();
        $categories = Category::all();

        $productsData = [];
        $imageUrls = [

            "https://lagomhomestore.com/cdn/shop/files/kursi-minimalis-dengan-premium-cushion-chair-lagom-home-store-teak-furniture-boutique-jati-furnitur-jakarta-39277364904172.jpg?v=1697171875&width=2972",
            "https://lagomhomestore.com/cdn/shop/files/kursi-minimalis-dengan-premium-cushion-chair-lagom-home-store-teak-furniture-boutique-jati-furnitur-jakarta-39277364904172.jpg?v=1697171875&width=2972",
            "https://lagomhomestore.com/cdn/shop/files/kursi-minimalis-dengan-premium-cushion-chair-lagom-home-store-teak-furniture-boutique-jati-furnitur-jakarta-39277364904172.jpg?v=1697171875&width=2972",
          ];
        for ($i = 1; $i <= 10; $i++) {
            $seller = $sellers->random();
            $category = $categories->random();

            $productsData[] = [
                'title' => "Product $i",
                'slug' => "product-$i",
                'category_id' => $category->id,
                'seller_id' => $seller->id,
                'description' => "Description for Product $i.",
                'price' => rand(500000, 5000000) ,
                'stock' => rand(50, 200),
                'images' =>  json_encode($imageUrls) ,
                'verify' => 0,
                'status' => 1,
            ];
        }

        foreach ($productsData as $data) {
            Product::create($data);
        }
    }
}