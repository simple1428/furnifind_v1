import { SuccessAlert } from "@/Components/Index";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function ModalArchive({ productId, show, setShow }) {
    const { post } = useForm();
    const handleConfirmArchive = () => {
        // Kirim permintaan POST ke route product.unlisted

        post(route("product.archive.active", { id: productId }), {
            preserveScroll: true,
            onSuccess: () =>
                SuccessAlert("Produk berhasil diarspkan", "bottom-end"),
        });
        setShow(false);
    };

    const handleCancelArchive = () => {
        setShow(false);
    };
    return (
        <div>
            {show && (
                <div className="fixed inset-0 z-[990] flex items-center justify-center bg-black/50  ">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <p>Apakah Anda yakin ingin mengarsipkan produk ini?</p>
                        <div className="flex justify-end mt-4">
                            <button
                                className="px-4 py-2 mr-2 text-white bg-red-500 rounded hover:bg-red-600"
                                onClick={handleConfirmArchive}
                            >
                                Ya
                            </button>
                            <button
                                className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                                onClick={handleCancelArchive}
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
