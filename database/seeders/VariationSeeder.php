<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\VariationProduct;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VariationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {


        $products = Product::all();

        foreach ($products as $product) {
            VariationProduct::create([
                'product_id' => $product->id,
                'name' => 'Mentahan ' . $product->name,
                'stock' => rand(1, 100),
                'price' => rand(50, 500),
            ]);

            VariationProduct::create([
                'product_id' => $product->id,
                'name' => 'Finishing ' . $product->name,
                'stock' => rand(1, 100),
                'price' => rand(50, 500),
            ]);
        }
    }
}
