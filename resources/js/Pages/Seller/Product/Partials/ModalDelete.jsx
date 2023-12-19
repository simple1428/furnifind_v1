// ModalDelete.js
import React from "react";
import { useForm } from "@inertiajs/react";
import { SuccessAlert } from "@/Components/Index";

const ModalDelete = ({ productId, show, setShow }) => {
    const { delete: destory } = useForm();

    const handleDelete = () => {
        destory(route("product.delete", productId), {
            preserveScroll: true,
            onSuccess: () => {
                SuccessAlert("Produk berhasil dihapus", "bottom-end");
                setShow(false);
            },
        });
    };

    return (
        show && (
            <div className="fixed inset-0 z-[990] flex items-center justify-center bg-black/50">
                <div className="bg-white p-6 rounded shadow-lg">
                    <p>Apakah Anda yakin ingin menghapus produk ini?</p>
                    <div className="flex justify-end mt-4">
                        <button
                            className="px-4 py-2 mr-2 text-white bg-red-500 rounded hover:bg-red-600"
                            onClick={handleDelete}
                        >
                            Ya
                        </button>
                        <button
                            className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                            onClick={() => setShow(false)}
                        >
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default ModalDelete;
