import React, { useState } from "react";
import { Box, TextInput } from "@/Components/Index";

const SearchBox = ({ products, categories, setProduct, url }) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchCategory, setSearchCategory] = useState("");

    // Fungsi untuk melakukan pencarian berdasarkan keyword yang dimasukkan
    const handleSearch = () => {
        let filteredProducts = products;

        if (url === "/portal/product/list/active") {
            filteredProducts = products.filter((item) => item.status === 1);
        } else if (url === "/portal/product/list/soldout") {
            filteredProducts = products.filter((item) => item.status === 2);
        } else if (url === "/portal/product/list/unlisted") {
            filteredProducts = products.filter((item) => item.status === 3);
        }

        // Lakukan pencarian berdasarkan keyword yang dimasukkan
        if (searchKeyword) {
            filteredProducts = filteredProducts.filter((item) =>
                item.title.toLowerCase().includes(searchKeyword.toLowerCase())
            );
        }

        // Lakukan pencarian berdasarkan kategori yang dipilih
        if (searchCategory) {
            filteredProducts = filteredProducts.filter(
                (item) => item.category_id === parseInt(searchCategory)
            );
        }

        setProduct(filteredProducts);
    };

    // Fungsi untuk menghandle perubahan nilai pencarian
    const handleSearchChange = (e) => {
        setSearchKeyword(e.target.value);
    };
    const handleSearchCategory = (e) => {
        setSearchCategory(e.target.value);
    };
    const handleResetSearch = () => {
        setSearchKeyword("");
        setSearchCategory("");
        // Panggil handleSearch untuk mereset pencarian produk ke kondisi awal
        handleSearch();
    };

    return (
        <Box className="w-full h-44 flex justify-between flex-col">
            <div className="flex gap-3">
                <div className="w-1/2  g">
                    <div className="flex border rounded-md items-center border-gray-400">
                        <span className="py-2 text-xs border-r flex items-center justify-center w-[30%] border-gray-400">
                            Nama Produk
                        </span>
                        <TextInput
                            type="text"
                            placeholder="Cari produk..."
                            className="w-full py-2  border-0 rounded-md text-xs focus:ring-0"
                            value={searchKeyword}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div className="w-1/2  ">
                    <div className="flex   rounded-md items-center  ">
                        <span className="py-2 text-xs border-r flex items-center justify-center w-[30%]  ">
                            Kategori :
                        </span>
                        <select
                            className="w-full py-2 rounded-md border-gray-400 text-xs"
                            onChange={handleSearchCategory}
                            value={searchCategory}
                        >
                            <option value="" disabled>
                                Pilih Kategori
                            </option>
                            {categories.map((category, i) => {
                                return (
                                    <option key={i} value={category.id}>
                                        {category.name_category}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center text-xs">
                <button
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 transisi text-white rounded-md"
                    onClick={handleSearch}
                >
                    Cari
                </button>
                <button
                    className="px-4 py-2 hover:bg-gray-200 transisi border-gray-500  border rounded-md"
                    onClick={handleResetSearch}
                >
                    Atur Ulang
                </button>
            </div>
        </Box>
    );
};

export default SearchBox;
