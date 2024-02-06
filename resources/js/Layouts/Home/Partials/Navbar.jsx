import React from "react";
import { IoCart } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
export default function Navbar() {
    return (
        <div className=" flex justify-between items-center border-b py-3">
            <div className="flex justify-center gap-2">
                <input
                    type="search"
                    className="rounded-md border-gray-200"
                    placeholder="Search"
                />
                <button className="bg-gray-100 p-3 rounded-lg">
                    <IoSearch />
                </button>
            </div>
            <div className=" flex justify-center items-center gap-3">
                <div className=" relative flex items-center justify-center rounded-md bg-gray-100 p-2 text-sm gap-1 cursor-pointer">
                    <span>
                        <IoCart />
                    </span>{" "}
                    Cart
                    <div className="h-5 w-5 bg-blue-500 absolute -top-2 -right-2 flex items-center justify-center text-white rounded-full">
                        2
                    </div>
                </div>
                <div className="flex items-center justify-center   text-sm gap-1.5 cursor-pointer ">
                    <span className="rounded-md bg-gray-100 p-2">
                        <FaRegUser />
                    </span>
                    Misbah
                </div>
            </div>
        </div>
    );
}
