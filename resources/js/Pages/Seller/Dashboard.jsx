import Box from "@/Components/Box";
import Container from "@/Components/Container";
import SellerLayout from "@/Layouts/Seller/Index";
import { Head, Link } from "@inertiajs/react"; // Langkah 1
import clsx from "clsx";
import React from "react";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <SellerLayout>
                <Container className="w-full flex gap-5">
                    <Box className="w-[70%] h-fit ">
                        <h1 className="font-semibold">Yang Perlu Dilakukan</h1>
                        <p className="text-gray-400 text-xs">
                            Hal-hal yang perlu ditangani
                        </p>
                        <div className="grid grid-cols-4 mt-7 gap-y-5"></div>
                    </Box>
                    <Box className="w-[30%] h-44"></Box>
                </Container>
            </SellerLayout>
        </>
    );
}

const Card = ({ className, total, title, href }) => {
    // Langkah 2
    return (
        <Link href={href}>
            <div
                className={clsx(
                    className,
                    "w-full h-16 rounded-sm flex items-center flex-col justify-center hover:bg-[#f0f0f0] transisi cursor-pointer"
                )}
            >
                <h3 className="text-blue-600 font-semibold">{total}</h3>
                <p className="text-xs text-center h-1/2">{title}</p>
            </div>
        </Link>
    );
};
