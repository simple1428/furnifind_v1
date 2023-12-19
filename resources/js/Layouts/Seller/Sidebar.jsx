import React, { useState } from "react";
import { AiOutlineShop } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import {
    RiDraftLine,
    RiShoppingBag3Line,
    RiSettings3Line,
} from "react-icons/ri";
import { Link, usePage } from "@inertiajs/react";

const SidebarItem = ({ icon, title, links }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(
        localStorage.getItem(`dropdown_${title}`) === "true"
    );

    // Fungsi untuk menyimpan nilai isDropdownOpen di localStorage dan mengubah state
    const toggleDropdown = () => {
        const newIsDropdownOpen = !isDropdownOpen;
        setIsDropdownOpen(newIsDropdownOpen);
        localStorage.setItem(`dropdown_${title}`, newIsDropdownOpen);
    };

    return (
        <li className="list-item-sidebar w-full  ">
            <span>{icon}</span>
            <div className="w-full">
                <p
                    className="list-title-sidebar border-b"
                    onClick={toggleDropdown}
                >
                    {title}
                </p>
                {isDropdownOpen && (
                    <ul className="list-item-sidebar-2  tracking-wider">
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                preserveScroll
                                className={link.isActive ? "link_active" : ""}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                )}
            </div>
        </li>
    );
};
export default function Sidebar() {
    const { url, component } = usePage();

    const sidebarItems = [
        {
            icon: <RiDraftLine />,
            title: "Pesanan",
            links: [
                {
                    label: "Pesanan",
                    href: "/",
                    isActive: url === "/",
                },
                {
                    label: "Tambah Pesanan",
                    href: "/",
                    isActive: url === "/",
                },
                {
                    label: "Pembatalan",
                    href: "/",
                    isActive: url === "/",
                },
            ],
        },
        {
            icon: <RiShoppingBag3Line />,
            title: "Produk",
            links: [
                {
                    label: "Produk",
                    href: route("product.index"),
                    isActive: url.startsWith("/0102/product"),
                },
            ],
        },
        {
            icon: <AiOutlineShop />,
            title: "Toko",
            links: [
                {
                    label: "Profile Toko",
                    href: "/",
                    isActive: url === "/",
                },
                {
                    label: "Kategori Toko",
                    href: "/",
                    isActive: url === "/",
                },
                { label: "Penyimpanan Media", href: "/" },
            ],
        },

        {
            icon: <RiSettings3Line />,
            title: "Pengaturan",
            links: [
                { label: "Alamat", href: "" },
                { label: "Pengaturan Toko", href: "" },
                { label: "Akun", href: "" },
            ],
        },
    ];

    return (
        <div className="sidebar">
            <div className="pt-3">
                <ul className="space-y-4">
                    <li className="list-item-sidebar w-full  ">
                        <span>
                            {" "}
                            <RiDashboardLine />
                        </span>{" "}
                        {/* Tambahkan onClick handler */}
                        <div className="w-full">
                            <Link
                                href={route("seller-dashboard")}
                                className="list-title-sidebar border-b"
                            >
                                Dashboard
                            </Link>
                        </div>
                    </li>
                    {sidebarItems.map((item, index) => (
                        <SidebarItem key={index} {...item} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
