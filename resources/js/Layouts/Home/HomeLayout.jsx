import React from "react";
import Navbar from "./Partials/navbar";
import Sidebar from "./Partials/Sidebar";
import Footer from "./Partials/Footer";
export default function HomeLayout({ children }) {
    return (
        <>
            <Sidebar />
            {/* main */}
            <div className=" p-2 ml-[300px] flex flex-col justify-between  h-screen">
                <div className="">
                    <Navbar />
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
