<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SellerController\Dashboard as DashboardSeller;
use App\Http\Controllers\SellerController\Product as ProductSeller;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


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
