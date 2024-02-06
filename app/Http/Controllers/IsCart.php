<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

class IsCart extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function addToCart(Product $product)
    {
        // Cari keranjang berdasarkan user (misalnya, jika Anda ingin menyimpan keranjang per user)
        $cart = Cart::where('user_id', auth()->id())->first();
        // dd($cart->products());
        if (!$cart) {
            // Jika keranjang untuk user belum ada, buat baru
            $cart = new Cart();
            $cart->user_id = auth()->id();
            $cart->product_id = $product->id;
            $cart->quantity = 1;
            $cart->save();
        }

        // Cari produk dalam keranjang
        $cartItem = $cart->where('product_id', $product->id)->first();
        // dd($cartItem);

        if ($cartItem) {
            // Jika produk sudah ada dalam keranjang, tambahkan jumlahnya
            $cartItem->update(['quantity'=> $cartItem->quantity +1]);
        } else {
            // Jika produk belum ada dalam keranjang, tambahkan ke keranjang dengan jumlah 1
            $cart = new Cart();
            $cart->user_id = auth()->id();
            $cart->product_id = $product->id;
            $cart->quantity = 1;
            $cart->save();
        }

        // Redirect atau lakukan tindakan lain setelah produk ditambahkan ke dalam keranjang
        // Misalnya, tampilkan pesan sukses atau arahkan kembali ke halaman produk
        return redirect()->back() ;
    }
    public function reduceCart(Cart $cart)
    {
        if($cart->quantity <= 1){
            $cart->delete();
        }
        $cart->update([
            'quantity'=> $cart->quantity - 1
        ]);
        return redirect()->back() ;
    }
    public function addCart(Cart $cart)
    {

        $cart->update([
            'quantity'=> $cart->quantity + 1
        ]);
        return redirect()->back() ;
    }
    public function removeCart(Cart $cart)
    {

        $cart->delete();
        return redirect()->back() ;
    }
}