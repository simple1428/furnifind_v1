import React from "react";
import { RiHeartLine, RiPencilLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { findMinMaxHarga, formatNumber } from "../Function/HandleNumberFormat";
import { FormatRupiah } from "@arismun/format-rupiah";
import { TextTruncate } from "@/Components/Index";

const CardProduct = ({ product }) => {
    const asset = window.asset;

    return (
        <>
            <div className="grid grid-cols-6 gap-3 mt-5">
                {product.map((item, i) => {
                    const images = JSON.parse(item.images);
                    const stock = item.variation.reduce(
                        (a, v) => (a += v.stock),
                        0
                    );
                    const price = findMinMaxHarga(item.variation);

                    return (
                        <div
                            key={i}
                            className="border h-[15rem] w-full rounded-md bg-white hover:shadow-lg cursor-pointer transition"
                        >
                            <img
                                // src={`${asset}storage/${images[0]}`}
                                src={images[0]}
                                className="w-full h-[55%]"
                                alt={item.title}
                            />
                            <div className="p-1 text-[10px] border-b">
                                <h1 className="uppercase font-[500]">
                                    <TextTruncate
                                        text={item.title}
                                        maxWords={3}
                                    />
                                </h1>
                                <div className="text-[9px]">
                                    <p className="text-orange-500">
                                        {price.min === price.max ? (
                                            <FormatRupiah value={price.min} />
                                        ) : (
                                            <>
                                                <FormatRupiah
                                                    value={price.min}
                                                />{" "}
                                                -{" "}
                                                <FormatRupiah
                                                    value={price.max}
                                                />
                                            </>
                                        )}
                                    </p>
                                    <p>Stok {formatNumber(stock)}</p>
                                </div>
                                <div className="flex justify-between text-[9px] text-gray-400">
                                    <p className="inline-flex items-center">
                                        <RiHeartLine />
                                        {item.like
                                            ? formatNumber(item.like)
                                            : 0}
                                    </p>
                                    <p>
                                        Penjualan{" "}
                                        {item.sale
                                            ? formatNumber(item.sale)
                                            : 0}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-evenly py-1">
                                <div className="flex items-center justify-center px-2 py-1 hover:bg-gray-300 transition rounded-sm">
                                    <RiPencilLine />
                                </div>
                                <div className="border-r h-5 border-gray-300"></div>
                                <div className="flex items-center justify-center px-2 py-1 hover:bg-gray-300 transition rounded-sm">
                                    <BsThreeDots />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default CardProduct;
