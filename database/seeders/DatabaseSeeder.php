<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();
        \App\Models\VariationProduct::factory(10)->create();

        User::create([
            'name' => 'Misbah',
            'email' => 'misbahudin1428@gmail.com',
            'email_verified_at' => now(),
            'role' => 3,
            'password' => bcrypt('A7051892b'),
            'remember_token' => Str::random(10),
        ]);
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}