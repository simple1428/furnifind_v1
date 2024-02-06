import HomeLayout from "@/Layouts/Home/HomeLayout";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { LuHeartHandshake, LuShoppingCart } from "react-icons/lu";
import { AiOutlineLoading, AiOutlineShopping } from "react-icons/ai";
import { TbOctahedronPlus } from "react-icons/tb";
import Breadcrumb from "@/Components/BreadCumb";
import IsCart from "@/Utils/IsCart";
import IsLike from "@/Utils/IsLike";

export default function Show(props) {
    const { product, sellerProducts, products, seller } = props;
    const images = JSON.parse(product.images);
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Products", url: route("products.all") },
        {
            label: product.title,
        },
    ];
    const [isLoading, setIsLoading] = useState(false);
    const { post } = useForm();
    console.log(product);
    return (
        <>
            <Head title={`FurniFind - ${product.title}`} />
            <HomeLayout>
                <div className="my-5">
                    <Breadcrumb items={breadcrumbItems} />
                    <div className="flex justify-between items-center border-b py-2">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="font-semibold text-4xl">
                                {product.title}
                            </h1>
                            <div className="flex gap-3 items-center">
                                <span
                                    onClick={() => IsLike(product.slug, post)}
                                    className={`${
                                        product.likes != 0
                                            ? "text-red-500 text-3xl cursor-pointer"
                                            : "text-gray-500 text-3xl cursor-pointer"
                                    }  `}
                                >
                                    <LuHeartHandshake />
                                </span>
                                <span className="py-2 px-3 rounded-full bg-gray-700 text-white shadow-lg duration-200 transition-all hover:bg-blue-700 ">
                                    <FormatRupiah value={product.price} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="  my-5">
                        <div className="w-full h-auto   gap-3 xl:columns-4 md:columns-3 sm:columns-2 space-y-5">
                            {images.map((data, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={data}
                                        alt={product.title}
                                        className="h-auto w-full max-w-full rounded-lg"
                                    />
                                );
                            })}
                        </div>
                        <div className="my-5 flex items-center justify-between bg-sky-50 shadow-sm  px-3 py-7 rounded-full relative overflow-hidden">
                            {seller.type == 1 ? (
                                <p className="absolute   text-blue-700/20 text-[10rem]  rotate-3   font-light">
                                    FurniPlus+
                                </p>
                            ) : null}

                            <div className="">
                                <div className="flex items-center gap-2 ">
                                    <div className="h-14 w-14  relative rounded-full bg-white">
                                        {seller.type == 1 ? (
                                            <div className="text-2xl absolute top-0 -right-2 text-blue-700">
                                                <TbOctahedronPlus />
                                            </div>
                                        ) : null}
                                    </div>
                                    <p className="font-semibold text-lg ">
                                        {product.seller.company_name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 ">
                                <span
                                    onClick={() =>
                                        IsCart(product.slug, post, setIsLoading)
                                    }
                                    className="bg-blue-700 flex items-center gap-2 p-2 text-white rounded-lg cursor-pointer hover:bg-blue-500 transition-all duration300"
                                >
                                    {isLoading ? (
                                        <AiOutlineLoading className="animate-spin text-xl sm:3xl" />
                                    ) : (
                                        <div className="flex items-center  gap-2">
                                            <LuShoppingCart />
                                            Keranjang
                                        </div>
                                    )}
                                </span>
                                <span className="bg-sky-400  flex items-center gap-2 p-2 text-white rounded-lg cursor-pointer hover:bg-sky-200 transition-all duration300">
                                    <AiOutlineShopping />
                                    Beli Sekarang
                                </span>
                            </div>
                        </div>
                        <div className="w-full my-5 flex  gap-5">
                            <div className="w-[70%]">
                                <h3 className="text-xl font-semibold ">
                                    Description
                                </h3>
                                <article
                                    className="text-justify bg-gray-50 rounded-lg p-2"
                                    dangerouslySetInnerHTML={{
                                        __html: product.description,
                                    }}
                                ></article>
                            </div>
                            <div className="w-[30%]">
                                <h3 className="text-xl font-semibold ">
                                    Recomended
                                </h3>
                                <div className="h-[500px] skec  overflow-auto">
                                    {sellerProducts < 0 ? (
                                        <div className=" flex flex-col  gap-3 ">
                                            {sellerProducts
                                                .sort(() => Math.random() - 0.5)
                                                .filter(
                                                    (sellerProducts) =>
                                                        product.id !==
                                                        sellerProducts.id
                                                )
                                                .slice(0, 5)
                                                .map((data, index) => {
                                                    const images = JSON.parse(
                                                        data.images
                                                    );
                                                    return (
                                                        <Link
                                                            href={route(
                                                                "product.show",
                                                                data.slug
                                                            )}
                                                            key={index}
                                                            className="   w-full   h-36 flex gap-1 hover:shadow-md transition-all duration-150 p-1 rounded-lg"
                                                        >
                                                            <img
                                                                src={images[0]}
                                                                alt={data.title}
                                                                className="w-1/2 rounded-lg shadow-md"
                                                            />
                                                            <div className="h-full flex flex-col justify-between">
                                                                <div className="">
                                                                    <small className="text-slate-500 text-xs">
                                                                        {
                                                                            data
                                                                                .category
                                                                                .name
                                                                        }
                                                                    </small>
                                                                    <h1 className="text-lg font-semibold">
                                                                        {
                                                                            data.title
                                                                        }
                                                                    </h1>
                                                                </div>
                                                                <p className="py-2 px-5 rounded-full bg-gray-700 text-white shadow-lg text-xs ">
                                                                    <FormatRupiah
                                                                        value={
                                                                            data.price
                                                                        }
                                                                    />
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                        </div>
                                    ) : (
                                        <div className="">
                                            No Recommended Products Available
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="my-5  ">
                            <h3 className="text-xl font-semibold ">Others</h3>
                            <div className=" flex   gap-3 ">
                                {products
                                    .sort(() => Math.random() - 0.5)
                                    .filter(
                                        (products) => product.id !== products.id
                                    )
                                    // .filter(
                                    //     (products) =>
                                    //         product.category.id ===
                                    //         products.category.id
                                    // )
                                    .slice(0, 5)
                                    .map((data, index) => {
                                        const images = JSON.parse(data.images);
                                        return (
                                            <Link
                                                href={route(
                                                    "product.show",
                                                    data.slug
                                                )}
                                                key={index}
                                                className="   w-full h-fit flex flex-col gap-1 hover:shadow-md transition-all duration-150 p-1 rounded-lg"
                                            >
                                                <img
                                                    src={images[0]}
                                                    alt={data.title}
                                                    className="w-full h-52  border rounded-lg shadow-md"
                                                />
                                                <div className="h-full flex flex-col justify-between">
                                                    <div className="">
                                                        <small className="text-slate-500 text-xs">
                                                            {data.category.name}
                                                        </small>
                                                        <h1 className="text-lg font-semibold">
                                                            {data.title}
                                                        </h1>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
        </>
    );
}
