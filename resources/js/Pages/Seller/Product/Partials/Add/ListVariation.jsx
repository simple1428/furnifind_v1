import { InputError, InputLabel, TextInput } from "@/Components/Index";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { addToVariation, removeVariant } from "../../Function/HandleVariation";

export default function ListVariation({ form }) {
    const { data, setData, errors } = form;
    const [massEditPrice, setMassEditPrice] = useState("");
    const [massEditStock, setMassEditStock] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleMassEdit = () => {
        const newData = data.variation.map((item) => ({
            ...item,
            price: massEditPrice,
            stock: massEditStock,
        }));
        setData("variation", newData);
    };

    const handleSave = () => {
        setIsLoading(true);
        // Simulate API call or async operation
        setTimeout(() => {
            setIsLoading(false);
            // Perform success actions
        }, 1000);
    };

    const renderVariationRows = () => {
        return data.variation.map((item, i) => (
            <tr key={i} className="text-center">
                <td className="border text-center">
                    <p className="">{item.name}</p>
                </td>

                <td className="border text-center px-5">
                    <TextInput
                        className="w-full py-1 text-xs"
                        type="number"
                        value={item.price}
                        onChange={(e) => {
                            const items = {
                                value: e.target.value,
                                ket: "price",
                                index: i,
                            };
                            addToVariation(items, form);
                        }}
                        min="99"
                    />
                    <InputError
                        message={
                            errors.variation &&
                            errors.variation[i] &&
                            errors.variation[i].price
                        }
                        className="mt-2 text-xs"
                    />
                </td>
                <td className="border text-center px-5">
                    <TextInput
                        className="w-full py-1 text-xs"
                        type="number"
                        value={item.stock}
                        onChange={(e) => {
                            const items = {
                                value: e.target.value,
                                ket: "stock",
                                index: i,
                            };

                            addToVariation(items, form);
                        }}
                        min="0"
                    />
                </td>
                <td className="border text-xl cursor-pointer">
                    <span
                        className="flex justify-center"
                        onClick={() => removeVariant(i, form)}
                    >
                        <BsTrash />
                    </span>
                </td>
            </tr>
        ));
    };

    return (
        <>
            {data.variation.length > 0 && (
                <>
                    <div className="flex my-5 gap-x-3 items-start">
                        <div className="w-[15%]" />
                        <div className="w-[85%] flex gap-x-3">
                            <div className="w-[50%] flex gap-x-3 items-center">
                                <InputLabel className="text-xs">
                                    Harga:
                                </InputLabel>
                                <TextInput
                                    className="w-full py-1 text-xs"
                                    type="number"
                                    value={massEditPrice}
                                    onChange={(e) =>
                                        setMassEditPrice(e.target.value)
                                    }
                                    min="99"
                                />
                            </div>
                            <div className="w-[50%] flex gap-x-3 items-center">
                                <InputLabel className="text-xs">
                                    Stok:
                                </InputLabel>
                                <TextInput
                                    className="w-full py-1 text-xs"
                                    type="number"
                                    value={massEditStock}
                                    onChange={(e) =>
                                        setMassEditStock(e.target.value)
                                    }
                                    min="0"
                                />
                            </div>
                            <button
                                className="ml-3 px-3 py-1 bg-blue-500 text-white rounded-sm text-xs"
                                onClick={() => {
                                    setIsLoading(true);
                                    handleMassEdit();
                                    setIsLoading(false);
                                    handleSave();
                                }}
                                disabled={isLoading}
                            >
                                {isLoading ? "Loading..." : "Simpan"}
                            </button>
                        </div>
                    </div>
                    <div className="flex my-5 gap-x-3 items-start">
                        <InputLabel className="text-xs w-[15%] text-end">
                            Daftar Variasi
                        </InputLabel>
                        <table className="text-xs w-[85%]">
                            <thead>
                                <tr className="bg-gray-100 text-center">
                                    <th className="p-2 border w-[30%]">
                                        Nama Variasi
                                    </th>
                                    <th className="p-2 border w-[25%]  ">
                                        <span className="text-red-500">*</span>
                                        Harga
                                    </th>
                                    <th className="p-2 border w-[25%]  ">
                                        <span className="text-red-500">*</span>
                                        Stok
                                    </th>
                                    <th className="p-2 border w-[10%]"></th>
                                </tr>
                            </thead>
                            <tbody>{renderVariationRows()}</tbody>
                        </table>
                    </div>
                </>
            )}
        </>
    );
}
