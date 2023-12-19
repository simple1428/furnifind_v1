import React from "react";
import { Link } from "@inertiajs/react";

const TabList = ({ url }) => {
    // Data tab untuk kategori produk
    const tabs = [
        {
            text: "Semua",
            href: route("product.index"),
            isActive: url === "/portal/product/list/all",
        },
        {
            text: "Live",
            href: route("product.active"),
            isActive: url === "/portal/product/list/active",
        },
        {
            text: "Habis",
            href: route("product.soldout"),
            isActive: url === "/portal/product/list/soldout",
        },
        {
            text: "Arsip",
            href: route("product.unlisted"),
            isActive: url === "/portal/product/list/unlisted",
        },
    ];
    return (
        <div className="h-12 border-b flex justify-start items-end gap-5">
            {tabs.map((tab, index) => (
                <Link
                    key={index}
                    preserveScroll
                    href={tab.href}
                    className={`tab-list ${tab.isActive ? "tab-active" : ""}`}
                >
                    {tab.text}
                </Link>
            ))}
        </div>
    );
};

export default TabList;
