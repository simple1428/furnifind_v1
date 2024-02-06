import Breadcrumb from "@/Components/BreadCumb";
import HomeLayout from "@/Layouts/Home/HomeLayout";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
export default function Index(props) {
    const { products } = props;
    const maxProductsToShow = 9;
    const itemsPerPage = 9;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const toggleImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    };
    const [currentPage, setCurrentPage] = useState(1);

    // Check if products is undefined or empty
    if (!products || products.length === 0) {
        return (
            <>
                <Head title="All Product FurniFind" />
                <HomeLayout>
                    <p>No products available.</p>
                </HomeLayout>
            </>
        );
    }
    // Calculate the starting index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;

    // Slice the products array to get the products for the current page
    const displayedProducts = products.slice(
        startIndex,
        startIndex + maxProductsToShow
    );

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Products", url: route("products.all") },
    ];
    return (
        <>
            <Head title="All Product FurniFind" />
            <HomeLayout>
                <div className="my-5">
                    <Breadcrumb items={breadcrumbItems} />
                    <div className="flex justify-between items-center border-b py-2">
                        <div className="">
                            <h1 className="font-semibold text-4xl">Explore</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="bg-gray-100 py-2 px-5 rounded-full text-lg font-semibold">
                                Filters
                            </p>
                            <span className="bg-gray-100 p-3.5 rounded-full">
                                <IoSearch />
                            </span>
                        </div>
                    </div>

                    <div className="w-full h-[900px]  my-5 mb-10   xl:columns-4 md:columns-3 sm:columns-2 space-y-5">
                        {displayedProducts.map((data, index) => {
                            const images = JSON.parse(data.images);
                            return (
                                <div
                                    href={route("product.show", data.slug)}
                                    key={index}
                                    className="relative group transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                >
                                    <Link
                                        href={route("product.show", data.slug)}
                                    >
                                        <img
                                            src={images[0]}
                                            alt={data.title}
                                            className="h-auto w-full max-w-full rounded-lg"
                                        />
                                        <div
                                            className={`${
                                                data.isLikedByUser
                                                    ? "text-red-500"
                                                    : "text-gray-500"
                                            } p-2 absolute top-2 right-2 flex justify-center items-center gap-3   text-xl cursor-pointer`}
                                        >
                                            <LuHeartHandshake />
                                        </div>
                                        <div className="  p-2 absolute bottom-0  flex  w-full items-center gap-3 justify-between   ">
                                            <div className="">
                                                <small className="text-slate-300">
                                                    {data.category.name}
                                                </small>
                                                <h1 className="text-lg text-black font-semibold">
                                                    {data.title}
                                                </h1>
                                            </div>
                                            <span className="py-2 px-3 rounded-full bg-blue-700 text-white shadow-lg">
                                                <FormatRupiah
                                                    value={data.price}
                                                />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </HomeLayout>
        </>
    );
}

function Pagination({ totalPages, currentPage, onPageChange }) {
    return (
        <div className="flex justify-center mt-5">
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index + 1}
                    className={`mx-2 p-2 ${
                        currentPage === index + 1
                            ? "bg-gray-800 text-white"
                            : "bg-gray-300"
                    } rounded-full`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}
