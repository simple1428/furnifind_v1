<?php

namespace Database\Seeders;

use App\Models\Seller;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SellerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        for($i=0; $i<15; $i++){
            $user = $users->random();
            Seller::factory()->create([
                'user_id' => $user->id,
                ]
            );
        }

    }
}