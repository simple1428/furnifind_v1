import { InputLabel, TextInput } from "@/Components/Index";
import React, { useEffect, useState } from "react";
import { confirmVariation } from "../../Function/HandleVariation";

export default function Variation({ form }) {
    const { data, setData } = form;
    const [namevar, setNamevar] = useState("");
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (data.variation) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [data.variation]);
    const handleActivateVariation = () => {
        setActive(true);
    };

    const handleDeactivateVariation = () => {
        setActive(false);
        setData("variation", "");
    };

    const handleNameChange = (e) => {
        setNamevar(e.target.value);
    };

    const handleAddVariation = () => {
        if (namevar) {
            confirmVariation(form, namevar, setNamevar);
        }
    };

    return (
        <div className="flex my-5 gap-x-3 items-start">
            <InputLabel className="text-xs w-[15%] text-end">
                Variasi
            </InputLabel>
            <div className="w-[85%]">
                {!active ? (
                    <span
                        onClick={handleActivateVariation}
                        className="text-red-500 border border-dashed border-gray-400 text-xs px-3 py-1 rounded-sm hover:border-red-600 hover:bg-red-100/50 transisi cursor-pointer"
                    >
                        + Aktifkan Variasi
                    </span>
                ) : (
                    <div className="w-full rounded-sm bg-gray-100 h-fit space-y-3 py-5 mt-2 relative p-3">
                        <span
                            onClick={handleDeactivateVariation}
                            className="absolute cursor-pointer  translate-y-0 right-3"
                        >
                            X
                        </span>
                        <div className="w-full flex gap-x-3 items-center">
                            <InputLabel className="text-xs w-[15%]">
                                Variasi
                            </InputLabel>
                            <TextInput
                                className="w-[50%] py-1 text-xs"
                                value={namevar}
                                name="namevar"
                                onChange={handleNameChange}
                            />
                            <button
                                onClick={handleAddVariation}
                                className="text-xs px-3 py-1 bg-orange-500 hover:bg-orange-600 transisi rounded-sm text-white"
                            >
                                +
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
