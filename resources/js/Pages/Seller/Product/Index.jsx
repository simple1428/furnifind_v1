// Import komponen dan library yang diperlukan
import Box from "@/Components/Box";
import Container from "@/Components/Container";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import { RiAddFill, RiListCheck, RiBox3Line } from "react-icons/ri";
import TableProduct from "./Partials/TableProduct";
import CardProduct from "./Partials/CardProduct";
import Pagination from "./Partials/Pagination";
import SearchBox from "./Partials/SearchBox";
import TabList from "./Partials/Tablist";
import SellerLayout from "@/Layouts/Seller/Index";

export default function Index({ products, categories }) {
    // Menggunakan usePage untuk mendapatkan informasi URL halaman
    const { url } = usePage();

    // State untuk menyimpan data produk yang akan ditampilkan
    const [product, setProduct] = useState(products);

    // State untuk menampilkan tampilan daftar atau tampilan kotak
    const [model, setModel] = useState("list");

    // Menggunakan useEffect untuk filter produk berdasarkan URL yang aktif
    useEffect(() => {
        const statusMap = {
            "/portal/product/list/active": 1,
            "/portal/product/list/soldout": 2,
            "/portal/product/list/unlisted": 3,
        };

        const status = statusMap[url];
        const filteredProducts =
            status !== undefined
                ? products.filter((item) => item.status === status)
                : products;
        setProduct(filteredProducts);
    }, [url, products]);

    // Jumlah item yang ingin ditampilkan per halaman
    const itemsPerPage = 5;

    // State untuk halaman yang aktif
    const [currentPage, setCurrentPage] = useState(1);

    // Hitung total jumlah halaman berdasarkan jumlah produk dan itemsPerPage
    const totalPages = Math.ceil(product.length / itemsPerPage);

    // Fungsi untuk menampilkan produk sesuai halaman yang aktif
    const displayProducts = product.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Fungsi untuk mengubah halaman
    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Pagination function
    const renderPagination = () => {
        if (displayProducts.length <= itemsPerPage) {
            return (
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    changePage={changePage}
                />
            );
        }
        return null;
    };

    return (
        <>
            <Head title="Product" />
            <SellerLayout title="Produk">
                <Container className="w-full">
                    <SearchBox
                        products={products}
                        categories={categories}
                        setProduct={setProduct}
                        url={url}
                    />
                    <Box className="w-full h-fit mt-5">
                        <TabList url={url} />
                        <div className="h-14 flex justify-between items-center">
                            <div className="">
                                <h1 className="text-sm font-semibold ">
                                    {product.length} Produk
                                </h1>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Tombol untuk menambahkan produk baru */}
                                <Link
                                    href={route("product.create")}
                                    className=" text-xs flex items-center gap-1 bg-orange-500 hover:bg-orange-600 cursor-pointer transisi px-3 py-2 rounded-md text-white"
                                >
                                    <RiAddFill />
                                    Tambah Produk
                                </Link>
                                {/* Tombol untuk mengubah tampilan antara list dan box */}
                                <div className="flex bg-[#f0f0f0] p-2 rounded-md cursor-pointer">
                                    <div
                                        onClick={() => {
                                            setModel("list");
                                        }}
                                        className={`p-1 rounded-sm ${
                                            model === "list" ? "bg-white" : ""
                                        }`}
                                    >
                                        <RiListCheck />
                                    </div>
                                    <div
                                        onClick={() => {
                                            setModel("box");
                                        }}
                                        className={`p-1 rounded-sm ${
                                            model === "box" ? "bg-white" : ""
                                        }`}
                                    >
                                        <RiBox3Line />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {model === "list" ? (
                            <div className="h-[33rem]">
                                <TableProduct product={displayProducts} />
                            </div>
                        ) : (
                            <CardProduct product={displayProducts} />
                        )}
                    </Box>
                    {/* Pagination */}
                    {renderPagination()}
                </Container>
            </SellerLayout>
        </>
    );
}
