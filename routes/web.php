<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController\Home;
use App\Http\Controllers\HomeController\Seller;
// use App\Http\Controllers\HomeController\IsCart as Cart;
use App\Http\Controllers\HomeController\Product;
use App\Http\Controllers\HomeController\Category;
use App\Http\Controllers\IsCart;
use App\Http\Controllers\IsLike;
use App\Http\Controllers\SellerController\Product as ProductSeller;
use App\Http\Controllers\SellerController\Dashboard as DashboardSeller;




    Route::get('/', [Home::class, 'index'])->name('home.index');
    Route::get('/product/all', [Product::class, 'index'])->name('products.all');
    Route::get('/product/{product}', [Product::class, 'show'])->name('product.show');
    Route::get('/popular', [Product::class, 'popular'])->name('product.popular');
    Route::get('/categories', [Category::class, 'index'])->name('categories.all');
    Route::get('/furniplus', [Seller::class, 'index'])->name('seller.furniplus');
    Route::post('/add-to-cart/{product}', [ IsCart::class , 'addToCart'])->name('cart.add');
    Route::post('/reduce-cart/{cart}', [IsCart::class, 'reduceCart'])->name('cart.reduce');
    Route::post('/add-cart/{cart}', [IsCart::class, 'addCart'])->name('cart.addcart');
    Route::post('/remove-cart/{cart}', [IsCart::class, 'removeCart'])->name('cart.remove');
    Route::post('/product/{product}/like', [IsLike::class, 'index'])->name('product.like');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::prefix('0102')->middleware('auth')->group(function () {
    Route::get('/dashboard',[DashboardSeller::class, 'index'])->name('seller-dashboard');
    Route::prefix('product')->group(function () {
        // Halaman tambah produk baru
        Route::get('/new', [ProductSeller::class, 'create'])->name('product.create');
        // Arsipkan produk
        Route::post('/archive/{product}', [ProductSeller::class, 'archive'])->name('product.archive.active');
        // Aktifkan kembali produk yang diarsipkan
        Route::post('/live/{product}', [ProductSeller::class, 'live'])->name('product.archive.deactive');
        // Simpan produk baru
        Route::post('/store/{id}', [ProductSeller::class, 'store'])->name('product.store');
        // Update produk
        Route::post('/update/{products}', [ProductSeller::class, 'update'])->name('product.update');
        // Halaman edit produk
        Route::get('/edit/{product}', [ProductSeller::class, 'edit'])->name('product.edit');
        // Hapus produk
        Route::delete('/delete/{product}', [ProductSeller::class, 'destroy'])->name('product.delete');

        // Grup rute untuk halaman daftar produk dengan filter
        Route::prefix('list')->group(function () {
            // Halaman daftar semua produk
            Route::get('/all', [ProductSeller::class, 'index'])->name('product.index');
            // Halaman daftar produk aktif
            Route::get('/active', [ProductSeller::class, 'index'])->name('product.active');
            // Halaman daftar produk yang sudah habis stok
            Route::get('/soldout', [ProductSeller::class, 'index'])->name('product.soldout');
            // Halaman daftar produk yang tidak terdaftar
            Route::get('/unlisted', [ProductSeller::class, 'index'])->name('product.unlisted');
        });
    });
});

require __DIR__.'/auth.php';