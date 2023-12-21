<?php

use App\Models\Category;
use App\Models\Seller;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {

            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->foreignIdFor(Category::class);
            $table->foreignIdFor(Seller::class);
            $table->longText('description');
            $table->bigInteger('price')->nullable();
            $table->integer('stock' )->nullable();
            $table->longText('images');
            $table->boolean('verify');
            $table->boolean('status');
            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};