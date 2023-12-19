import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function SellerLayout({ children, ...props }) {
    const { title } = props;
    console.log(props);

    return (
        <div className="min-h-screen bg-[#f0f0f0]">
            <Navbar title={title} />
            <Sidebar />
            <main className="ml-48 pt-[70px]  p-3 gap-3">{children}</main>
        </div>
    );
}
