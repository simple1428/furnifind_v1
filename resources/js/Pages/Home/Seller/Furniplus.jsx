import Breadcrumb from "@/Components/BreadCumb";
import HomeLayout from "@/Layouts/Home/HomeLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Furniplus() {
    const breadcrumbItems = [
        { label: "Home", url: "/" },
        { label: "Furniplus", url: route("seller.furniplus") },
    ];
    const asset = window.asset;
    return (
        <>
            <Head title="Popular Products" />
            <HomeLayout>
                <div className="my">
                    <Breadcrumb items={breadcrumbItems} />
                    <div className="flex justify-between items-center border-b py-2">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="font-semibold text-4xl">
                                Furniplus
                            </h1>
                        </div>
                    </div>
                    <div className="my-5 w-full flex items-center justify-center">
                        <img src={`${asset}images/comingsoon.svg`} alt="" />
                    </div>
                </div>
            </HomeLayout>
        </>
    );
}
