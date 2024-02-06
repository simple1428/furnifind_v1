import HomeLayout from "@/Layouts/Home/HomeLayout";
import React from "react";

export default function Index() {
    return (
        <>
            <HomeLayout>
                <div className="">
                    <div className="flex gap-3 justify-evenly mt-5">
                        <div className="w-full space-y-3">
                            <div className="rounded-lg bg-blue-300 w-full h-56 flex justify-center items-center">
                                Banner 1
                            </div>
                            <div className="rounded-lg bg-sky-400  w-full h-56 flex justify-center items-center">
                                Banner 2
                            </div>
                        </div>
                        <div className="w-full gap-3 flex">
                            <div className="rounded-lg bg-blue-200 w-full  flex justify-center items-center">
                                produk 1
                            </div>
                            <div className="rounded-lg bg-sky-700  w-full  flex justify-center items-center">
                                produk 2
                            </div>
                        </div>
                    </div>
                    <div className=" shadow-sm mt-5 rounded-lg p-3 flex justify-between items-center bg-white">
                        <span>Top Seller</span>
                        <ul
                            className="flex justify-evenly
                    gap-2"
                        >
                            <li className="bg-blue-300 rounded-full flex justify-center items-center h-5 w-5 p-5">
                                a
                            </li>
                            <li className="bg-blue-300 rounded-full flex justify-center items-center h-5 w-5 p-5">
                                b
                            </li>
                            <li className="bg-blue-300 rounded-full flex justify-center items-center h-5 w-5 p-5">
                                c
                            </li>
                            <li className="bg-blue-300 rounded-full flex justify-center items-center h-5 w-5 p-5  ">
                                ++
                            </li>
                        </ul>
                    </div>
                </div>
            </HomeLayout>
        </>
    );
}
