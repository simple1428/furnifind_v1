import React from "react";
import { MdClearAll } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { FaRankingStar } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

import { IoSettingsOutline } from "react-icons/io5";
import { TbLayoutDashboard } from "react-icons/tb";
import { Link, usePage } from "@inertiajs/react";

export default function Sidebar() {
    const { url, component } = usePage();
    return (
        <div className="w-[300px] fixed left-0 p-4  h-screen border-r flex flex-col justify-between z-[800] bg-white">
            <div className="space-y-12">
                <div className="  ">
                    <h1 className="font-bold text-2xl ">FurniFind</h1>
                </div>
                <div className=" ">
                    <ul className="space-y-2">
                        <li
                            className={
                                url === "/"
                                    ? "  rounded-full bg-blue-400 transition-all duration-300 cursor-pointer flex justify-start  text-white items-center gap-2 group  font-bold"
                                    : "hover:rounded-full   hover:bg-blue-400 transition-all duration-300 cursor-pointer flex justify-start hover:text-white items-center gap-2 grouphover:font-bold"
                            }
                        >
                            {" "}
                            <Link
                                href={route("home.index")}
                                className="flex p-2 justify-start items-center gap-2   w-full"
                            >
                                <span className="  rounded-full flex justify-center items-center p-1 group-hover:bg-white group-hover:text-blue-400 transition-all duration-300">
                                    <TbLayoutDashboard size={20} />
                                </span>{" "}
                                Home
                            </Link>
                        </li>
                        <li
                            className={
                                url.startsWith("/product")
                                    ? "  rounded-full bg-blue-400 transition-all duration-300 cursor-pointer flex justify-start  text-white items-center gap-2 group  font-bold"
                                    : "hover:rounded-full   hover:bg-blue-400 transition-all duration-300 cursor-pointer  hover:text-white  group hover:font-bold"
                            }
                        >
                            <Link
                                href={route("products.all")}
                                className="flex p-2 justify-start items-center gap-2   w-full"
                            >
                                <span className="  rounded-full flex justify-center items-center p-1 group-hover:bg-white group-hover:text-blue-400 transition-all duration-300">
                                    <MdClearAll size={20} />
                                </span>{" "}
                                Explore
                            </Link>
                        </li>
                        <li
                            className={
                                url.startsWith("/popular")
                                    ? "  rounded-full bg-blue-400 transition-all duration-300 cursor-pointer flex justify-start  text-white items-center gap-2 group  font-bold"
                                    : "hover:rounded-full   hover:bg-blue-400 transition-all duration-300 cursor-pointer  hover:text-white  group hover:font-bold"
                            }
                        >
                            <Link
                                href={route("product.popular")}
                                className="flex p-2 justify-start items-center gap-2   w-full"
                            >
                                <span className="  rounded-full flex justify-center items-center p-1 group-hover:bg-white group-hover:text-blue-400 transition-all duration-300">
                                    <FaRankingStar size={20} />
                                </span>{" "}
                                Popular
                            </Link>
                        </li>
                        <li
                            className={
                                url.startsWith("/categories")
                                    ? "  rounded-full bg-blue-400 transition-all duration-300 cursor-pointer flex justify-start  text-white items-center gap-2 group  font-bold"
                                    : "hover:rounded-full   hover:bg-blue-400 transition-all duration-300 cursor-pointer  hover:text-white  group hover:font-bold"
                            }
                        >
                            <Link
                                href={route("categories.all")}
                                className="flex p-2 justify-start items-center gap-2   w-full"
                            >
                                <span className="  rounded-full flex justify-center items-center p-1 group-hover:bg-white group-hover:text-blue-400 transition-all duration-300">
                                    <BiCategory size={20} />
                                </span>{" "}
                                Categories
                            </Link>
                        </li>
                        <li
                            className={
                                url.startsWith("/furniplus")
                                    ? "  rounded-full bg-blue-400 transition-all duration-300 cursor-pointer flex justify-start  text-white items-center gap-2 group  font-bold"
                                    : "hover:rounded-full   hover:bg-blue-400 transition-all duration-300 cursor-pointer  hover:text-white  group hover:font-bold"
                            }
                        >
                            <Link
                                href={route("seller.furniplus")}
                                className="flex p-2 justify-start items-center gap-2   w-full"
                            >
                                <span className="  rounded-full flex justify-center items-center p-1 group-hover:bg-white group-hover:text-blue-400 transition-all duration-300">
                                    <HiOutlineSquaresPlus size={20} />
                                </span>{" "}
                                Furniplus
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="  space-y-2">
                    <p className="text-gray-400">Quick Action</p>
                    <ul className="space-y-4">
                        <li className="  hover:rounded-full p-2 hover:bg-blue-400 transition-all duration-300 cursor-pointer flex justify-start hover:text-white items-center gap-2 group hover:font-bold">
                            <span className="  rounded-full flex justify-center items-center p-1 group-hover:bg-white group-hover:text-blue-400 transition-all duration-300">
                                <FiPlusCircle size={20} />
                            </span>{" "}
                            Request for Product
                        </li>
                    </ul>
                </div>
                <div className="  space-y-2">
                    <p className="text-gray-400">Preferences</p>
                    <ul className="space-y-4">
                        <li className="  hover:rounded-full p-2 hover:bg-blue-400 transition-all duration-300 cursor-pointer flex justify-start hover:text-white items-center gap-2 group hover:font-bold">
                            <span className="  rounded-full flex justify-center items-center p-1 group-hover:bg-white group-hover:text-blue-400 transition-all duration-300">
                                <IoSettingsOutline size={20} />
                            </span>{" "}
                            Setting
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">
                <ul className="space-y-4">
                    <li className="  hover:rounded-full p-2 hover:bg-blue-400 transition-all duration-300 cursor-pointer flex justify-start hover:text-white items-center gap-2 group hover:font-bold">
                        <span className="  rounded-full flex justify-center items-center p-1 group-hover:bg-white group-hover:text-blue-400 transition-all duration-300">
                            <IoMdLogOut size={20} />
                        </span>{" "}
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
}
