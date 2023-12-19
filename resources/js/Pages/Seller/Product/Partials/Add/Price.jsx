import { InputError, InputLabel, TextInput } from "@/Components/Index";
import React from "react";

export default function Price({ form }) {
    const { data, setData, errors } = form;

    if (data.variation.length > 0) return null;

    return (
        <div className="flex my-5 gap-x-3 items-start">
            <InputLabel className="text-xs w-[15%] text-end">
                <span className="text-red-500">*</span>
                Harga
            </InputLabel>
            <div className="w-[85%]">
                <TextInput
                    value={data.price}
                    type="number"
                    onChange={(e) => setData("price", e.target.value)}
                    placeholder="Rp"
                    className="w-[20%] px-3 py-1 text-xs"
                />
                <InputError message={errors.price} className="mt-2 text-xs" />
            </div>
        </div>
    );
}
