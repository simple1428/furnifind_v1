import { InputError, InputLabel, TextInput } from "@/Components/Index";
import React from "react";

export default function Title({ form }) {
    const { data, setData, errors } = form;

    const handleChange = (e) => {
        setData("title", e.target.value);
    };

    return (
        <div className="flex my-5 gap-x-3 items-start">
            <InputLabel className="text-xs w-[15%] text-end">
                <span className="text-red-500">*</span>Nama Produk
            </InputLabel>
            <div className="w-[85%]">
                <TextInput
                    value={data.title}
                    autoComplete="name"
                    onChange={handleChange}
                    type="text"
                    className="w-full px-3 py-1 text-xs"
                />
                <InputError message={errors.title} className="mt-2 text-xs" />
            </div>
        </div>
    );
}
