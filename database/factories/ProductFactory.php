<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
         $imageUrls = [
            "https://lagomhomestore.com/cdn/shop/files/kursi-minimalis-dengan-premium-cushion-chair-lagom-home-store-teak-furniture-boutique-jati-furnitur-jakarta-39277364904172.jpg?v=1697171875&width=2972",
            "https://lagomhomestore.com/cdn/shop/files/kursi-minimalis-dengan-premium-cushion-chair-lagom-home-store-teak-furniture-boutique-jati-furnitur-jakarta-39277365035244.jpg?v=1697171878&width=2980"
          ];
        return [
            'category_id' => function () {
                return \App\Models\Category::factory()->create()->id;
            },
            'seller_id' => function () {
                return \App\Models\Seller::factory()->create()->id;
            },
            'title' => $this->faker->word,
            'slug' => $this->faker->slug,
            'description' => $this->faker->sentence,
            'price' => $this->faker->randomFloat(2, 10, 100),
            'stock' => $this->faker->numberBetween(1, 100),
            'images' => json_encode($imageUrls),
            'status' => '1',
            'verify' => '1',
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}