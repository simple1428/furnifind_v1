import { Link } from "@inertiajs/react";
import React from "react";

const Logo = ({ asset }) => (
    <Link className="mb-5.5 inline-block" href="/">
        <img
            className="hidden dark:block"
            src={`${asset}images/logo/LogoFurniFind.png`}
            alt="Logo"
        />
        <img
            className="dark:hidden w-1/2 translate-x-1/2"
            src={`${asset}images/logo/LogoFurniFind.png`}
            alt="Logo"
        />
    </Link>
);

const Index = ({ children }) => {
    const asset = window.asset;

    return (
        <>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen">
                <div className="flex flex-wrap items-center">
                    <div className="hidden w-full xl:block xl:w-1/2">
                        <div className="py-17.5 px-26 text-center">
                            <Logo asset={asset} />

                            <h1 className="2xl:px-20 font-bold text-xl">
                                "Furniture? Ingat FurniFind. Desain ruangan yang
                                ekslusif dan terkini."
                            </h1>

                            <span className="mt-15 inline-block">
                                <img
                                    src={`${asset}images/logo/register.svg`}
                                    alt=""
                                />
                            </span>
                        </div>
                    </div>

                    <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
