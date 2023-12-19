import { InputError, InputLabel, TextInput } from "@/Components/Index";
import React from "react";

export default function Weight({ form }) {
    const { data, setData, errors } = form;

    const handleWeightChange = (e) => {
        setData("weight", e.target.value);
    };

    return (
        <div className="flex my-5 gap-x-3 items-start">
            <InputLabel className="text-xs w-[15%] text-end">
                <span className="text-red-500">*</span>Berat
            </InputLabel>
            <div className="w-[85%]">
                <TextInput
                    value={data.weight}
                    type="number"
                    onChange={handleWeightChange}
                    placeholder="gram"
                    className="w-[20%] px-3 py-1 text-xs"
                />
                <InputError message={errors.weight} className="mt-2 text-xs" />
            </div>
        </div>
    );
}
