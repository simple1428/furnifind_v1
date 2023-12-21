import { InputError, InputLabel, TextInput } from "@/Components/Index";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function Category({ form, categories }) {
    const { data, setData, errors } = form;
    const [selectedCategory, setSelectedCategory] = useState(
        categories.find((category) => category.id === data.category_id)
    );

    const handleCategoryChange = (value) => {
        const newCategory = categories.find(
            (category) => category.id === value
        );
        setData("category_id", value);
        setSelectedCategory(newCategory);
    };

    return (
        <div className="flex my-5 gap-x-3 items-start">
            <InputLabel className="text-xs w-[15%] text-end">
                <span className="text-red-500">*</span> Kategori
            </InputLabel>
            <div className="w-[85%] z-[500]">
                <Listbox
                    value={data.category_id}
                    onChange={handleCategoryChange}
                >
                    <div className="relative mt-1 z-[500]">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-gray-50 py-1 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border">
                            <span className="block truncate">
                                {selectedCategory
                                    ? selectedCategory.name
                                    : "Pilih Kategori"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 z-100 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {categories.map((category) => (
                                    <Listbox.Option
                                        key={category.id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active
                                                    ? "bg-blue-100 text-blue-900"
                                                    : "text-gray-900"
                                            }`
                                        }
                                        value={category.id}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-normal"
                                                    }`}
                                                >
                                                    {category.name}
                                                </span>
                                                {selected && (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
                <InputError
                    message={errors.category_id}
                    className="mt-2 text-xs"
                />
            </div>
        </div>
    );
}
