<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categoriesData = [
            [
                'name' => 'Kursi Makan',
                'description' => 'A comfortable chair for dining purposes.',
                'image' => 'https://www.shutterstock.com/image-photo/category-word-scattered-english-alpabets-260nw-1594857565.jpg',
                'slug' => 'kursi-makan'
            ],
            [
                'name' => 'Meja Belajar',
                'description' => 'A sturdy desk for studying or working.',
                'image' => 'https://www.shutterstock.com/image-photo/category-word-scattered-english-alpabets-260nw-1594857565.jpg',
                'slug' => 'meja-belajar'
            ],
            [
                'name' => 'Lampu Tidur',
                'description' => 'Soft lighting for a cozy sleep environment.',
                'image' => 'https://www.shutterstock.com/image-photo/category-word-scattered-english-alpabets-260nw-1594857565.jpg',
                'slug' => 'lampu-tidur'
            ],
            [
                'name' => 'Sofa Ruang Tamu',
                'description' => 'A stylish and comfortable sofa for the living room.',
                'image' => 'https://www.shutterstock.com/image-photo/category-word-scattered-english-alpabets-260nw-1594857565.jpg',
                'slug' => 'sofa-ruang-tamu'
            ],
            [
                'name' => 'Rak Buku',
                'description' => 'An organized shelf for your book collection.',
                'image' => 'https://www.shutterstock.com/image-photo/category-word-scattered-english-alpabets-260nw-1594857565.jpg',
                'slug' => 'rak-buku'
            ],
            [
                'name' => 'Tempat Tidur',
                'description' => 'A cozy bed for a good night\'s sleep.',
                'image' => 'https://www.shutterstock.com/image-photo/category-word-scattered-english-alpabets-260nw-1594857565.jpg',
                'slug' => 'tempat-tidur'
            ],
            [
                'name' => 'Cermin Dinding',
                'description' => 'A decorative wall mirror to enhance your space.',
                'image' => 'https://www.shutterstock.com/image-photo/category-word-scattered-english-alpabets-260nw-1594857565.jpg',
                'slug' => 'cermin-dinding'
            ],
            [
                'name' => 'Lemari Pakaian',
                'description' => 'A spacious wardrobe for your clothing.',
                'image' => 'https://www.shutterstock.com/image-photo/category-word-scattered-english-alpabets-260nw-1594857565.jpg',
                'slug' => 'lemari-pakaian'
            ],
            [
                'name' => 'Karpet Ruang Tamu',
                'description' => 'A plush carpet to add warmth to your living room.',
                'image' => 'https://www.shutterstock.com/image-photo/category-word-scattered-english-alpabets-260nw-1594857565.jpg',
                'slug' => 'karpet-ruang-tamu'
            ],
            [
                'name' => 'Meja TV',
                'description' => 'A sleek table for your television and entertainment system.',
                'image' => 'https://www.shutterstock.com/image-photo/category-word-scattered-english-alpabets-260nw-1594857565.jpg',
                'slug' => 'meja-tv'
            ],
        ];

        foreach ($categoriesData as $data) {
            Category::create($data);
        }
    }
}