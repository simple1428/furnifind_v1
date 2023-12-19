import { InputError, InputLabel } from "@/Components/Index";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Description({ form }) {
    const { data, setData, errors } = form;

    const handleDescriptionChange = (value) => {
        setData("description", value);
    };

    return (
        <div className="flex mt-5 mb-10 gap-x-3 items-start">
            <InputLabel className="text-xs w-[15%] text-end">
                <span className="text-red-500">*</span> Deskripsi
            </InputLabel>
            <div className="w-[85%]">
                <ReactQuill
                    className="h-fit "
                    value={data.description}
                    onChange={handleDescriptionChange}
                />
                <InputError message={errors.description} className="mt-2" />
            </div>
        </div>
    );
}
