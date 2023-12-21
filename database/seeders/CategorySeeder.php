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
                'image' => 'kursi_makan.jpg',
                'slug' => 'kursi-makan'
            ],
            [
                'name' => 'Meja Belajar',
                'description' => 'A sturdy desk for studying or working.',
                'image' => 'meja_belajar.jpg',
                'slug' => 'meja-belajar'
            ],
            [
                'name' => 'Lampu Tidur',
                'description' => 'Soft lighting for a cozy sleep environment.',
                'image' => 'lampu_tidur.jpg',
                'slug' => 'lampu-tidur'
            ],
            [
                'name' => 'Sofa Ruang Tamu',
                'description' => 'A stylish and comfortable sofa for the living room.',
                'image' => 'sofa_ruang_tamu.jpg',
                'slug' => 'sofa-ruang-tamu'
            ],
            [
                'name' => 'Rak Buku',
                'description' => 'An organized shelf for your book collection.',
                'image' => 'rak_buku.jpg',
                'slug' => 'rak-buku'
            ],
            [
                'name' => 'Tempat Tidur',
                'description' => 'A cozy bed for a good night\'s sleep.',
                'image' => 'tempat_tidur.jpg',
                'slug' => 'tempat-tidur'
            ],
            [
                'name' => 'Cermin Dinding',
                'description' => 'A decorative wall mirror to enhance your space.',
                'image' => 'cermin_dinding.jpg',
                'slug' => 'cermin-dinding'
            ],
            [
                'name' => 'Lemari Pakaian',
                'description' => 'A spacious wardrobe for your clothing.',
                'image' => 'lemari_pakaian.jpg',
                'slug' => 'lemari-pakaian'
            ],
            [
                'name' => 'Karpet Ruang Tamu',
                'description' => 'A plush carpet to add warmth to your living room.',
                'image' => 'karpet_ruang_tamu.jpg',
                'slug' => 'karpet-ruang-tamu'
            ],
            [
                'name' => 'Meja TV',
                'description' => 'A sleek table for your television and entertainment system.',
                'image' => 'meja_tv.jpg',
                'slug' => 'meja-tv'
            ],
        ];

        foreach ($categoriesData as $data) {
            Category::create($data);
        }
    }
}