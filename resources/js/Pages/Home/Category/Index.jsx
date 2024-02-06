import Breadcrumb from "@/Components/BreadCumb";
import HomeLayout from "@/Layouts/Home/HomeLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
export default function Index(props) {
    const { categories } = props;
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Categories", url: route("categories.all") },
    ];
    return (
        <>
            <Head title="Categories FurniFind" />
            <HomeLayout>
                <div className="my-5">
                    <Breadcrumb items={breadcrumbItems} />
                    <div className="flex justify-between items-center border-b py-2">
                        <div className="">
                            <h1 className="font-semibold text-4xl">
                                Categories
                            </h1>
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
                    <div className="my-5">
                        <div className="w-full    my-5 mb-10  xl:columns-4 md:columns-3 sm:columns-2  space-y-5 ">
                            {categories.map((data, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="  relative group transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                    >
                                        <Link href={route("categories.all")}>
                                            <img
                                                src={data.image}
                                                alt={data.title}
                                                className="h-auto w-full max-w-full rounded-lg"
                                            />
                                            <div className="  p-2 absolute top-2 right-2 flex justify-center items-center gap-3 text-red-500 text-xl">
                                                <LuHeartHandshake />
                                            </div>
                                            <div className="  p-2 absolute bottom-0  flex  w-full items-center gap-3 justify-between   ">
                                                <div className="bg-gray-100 rounded-tr-full rounded-bl-full py-2 px-4">
                                                    <h1 className="text-lg text-black font-semibold ">
                                                        {data.name}
                                                    </h1>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </HomeLayout>
        </>
    );
}
