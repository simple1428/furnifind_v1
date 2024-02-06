import React from "react";
import { Link } from "@inertiajs/react";

const Breadcrumb = ({ items }) => {
    return (
        <nav className="text-gray-500 text-sm mb-4 px-3 sm:px-0">
            <ol className="list-none p-0 inline-flex">
                {items.map((item, index) => (
                    <li key={index}>
                        {index < items.length - 1 ? (
                            <Link
                                href={item.url}
                                className="hover:text-gray-700"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-700">{item.label}</span>
                        )}
                        {index < items.length - 1 && (
                            <span className="mx-1">/</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
