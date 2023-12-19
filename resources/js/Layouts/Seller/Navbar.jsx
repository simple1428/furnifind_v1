import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { BiUserCircle, BiLogIn } from "react-icons/bi";
import { RiNotification3Line } from "react-icons/ri";

export default function Navbar(props) {
    const asset = window.asset;
    const { url, component } = usePage();
    const isAdminDashboard = component === "Seller/Dashboard";
    const { post } = useForm();
    const handleLogout = () => {
        post(route("logout")); // Mengirim request logout ke server
    };
    return (
        <div className="w-full flex justify-between fixed top-0 px-5 py-2 h-[56px] shadow-sm items-center bg-white z-[800]">
            <Link
                href={route("dashboard")}
                className="inline-flex justify-center items-center gap-1"
            >
                <img
                    src={`${asset}images/logo/LogoFurniFind.svg`}
                    alt=""
                    className="w-28"
                />
                <h1
                    className={`text-lg font-${
                        isAdminDashboard ? "semibold" : "normal"
                    } ${isAdminDashboard ? "" : "text-gray-400"} tracking-wide`}
                >
                    {isAdminDashboard ? "" : "Dashboard ~ " + props.title}
                </h1>
            </Link>

            <div className="flex gap-5 items-center">
                {/* notif */}
                <div className="h-8 w-8 transisi group hover:bg-[#f0f0f0] rounded-full cursor-pointer flex items-center justify-center">
                    <RiNotification3Line />
                </div>
                {/* notif end */}
                <div className="border-l border-gray-300 h-8"></div>
                {/* profile */}
                <div className="rounded-full flex items-center text-sm gap-2 px-2 py-1 cursor-pointer hover:bg-[#f0f0f0] transisi  relative group">
                    <img
                        src={`${asset}logo/logo-transparent.png`}
                        alt=""
                        className="w-7 h-7 rounded-full border bg-gray-200 p-0.5"
                    />
                    <p>Misbah</p>
                    <div className="absolute bg-white rounded-md translate-x-[300px] transisi -bottom-[5.8rem] left-0 shadow-md group-hover:translate-x-0 overflow-hidden">
                        <div className="inline-flex gap-1 items-center text-sm p-3 w-full hover:bg-[#f0f0f0] transisi">
                            <BiUserCircle />
                            <p>Profile</p>
                        </div>
                        <div
                            onClick={handleLogout}
                            className="inline-flex gap-1 items-center text-sm p-3 w-full hover:bg-[#f0f0f0] transisi"
                        >
                            <BiLogIn />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                {/* profile end */}
            </div>
        </div>
    );
}
