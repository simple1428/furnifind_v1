import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useState } from "react";
import { RiHeartLine } from "react-icons/ri";
import { formatNumber } from "../Function/HandleNumberFormat";
import { TextTruncate } from "@/Components/Index";
import { Link, useForm } from "@inertiajs/react";
import { SuccessAlert } from "@/Components/Alert";
import ModalArchive from "./ModalArchive";
import ModalDelete from "./ModalDelete";

const TableProduct = ({ product }) => {
    // Mendapatkan asset dari window
    const asset = window.asset;

    // Menggunakan useForm dari InertiaJS untuk melakukan POST request
    const { post } = useForm();

    // State untuk menampilkan atau menyembunyikan modal konfirmasi arsipkan
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    // State untuk menampilkan atau menyembunyikan modal konfirmasi hapus
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // State untuk menyimpan ID produk yang akan diarsipkan atau dihapus
    const [productId, setProductId] = useState(null);

    // Handler untuk menampilkan modal konfirmasi arsipkan
    const handleArchive = (productId) => {
        setProductId(productId);
        setShowConfirmationModal(true);
    };

    // Handler untuk menampilkan modal konfirmasi hapus
    const handleDelete = (productId) => {
        setProductId(productId);
        setShowDeleteModal(true);
    };

    // Handler untuk mengubah status produk menjadi aktif
    const handleLive = (id) => {
        post(route("product.archive.deactive", id), {
            preserveScroll: true,
            onSuccess: () =>
                SuccessAlert("Produk berhasil diupdate", "bottom-end"),
        });
    };

    return (
        <table className="w-full border">
            <thead>
                <tr className="text-xs text-gray-500 bg-gray-200">
                    <th className="py-2 w-[5%]"></th>
                    <th className="text-start w-[40%] py-2">Nama Produk</th>
                    <th className="text-start w-[10%] py-2">Variasi</th>
                    <th className="text-start w-[10%] py-2">Harga</th>
                    <th className="text-start w-[10%] py-2">Stok</th>
                    <th className="text-start w-[10%] py-2">Penjualan</th>
                    <th className="text-start w-[10%] py-2">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {product.length === 0 ? (
                    <tr>
                        <td colSpan="7" className="text-center py-8">
                            <div className="text-sm text-gray-500">
                                Tidak ada produk yang ditemukan
                            </div>
                        </td>
                    </tr>
                ) : (
                    product.map((item, i) => {
                        const images = JSON.parse(item.images);
                        return (
                            <tr
                                key={i}
                                className="border-b text-xs hover:bg-gray-100"
                            >
                                <td className="py-2 w-[5%]"></td>
                                <td className="text-start w-full py-2 flex items-start gap-1">
                                    <div className="relative">
                                        <img
                                            // src={`${asset}storage/${images[0]}`}
                                            src={images[0]}
                                            alt=""
                                            className="w-20 rounded-sm border transition-transform hover:scale-110 cursor-pointer"
                                        />
                                    </div>
                                    <div>
                                        <h1>
                                            <TextTruncate
                                                text={item.title}
                                                maxWords={4}
                                            />
                                        </h1>
                                        <div className="inline-flex items-center text-gray-400 mt-2">
                                            <RiHeartLine />
                                            {item.like
                                                ? formatNumber(item.like)
                                                : 0}
                                        </div>
                                    </div>
                                </td>
                                <td className="text-start w-[10%] py-2">
                                    <ul className="space-y-3">
                                        {item.variation.map((itemvar, i) => (
                                            <li key={i}>{itemvar.name}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="text-start w-[10%] py-2">
                                    {item.variation.length > 0 ? (
                                        <ul className="space-y-3">
                                            {item.variation.map(
                                                (itemvar, i) => (
                                                    <li key={i}>
                                                        <FormatRupiah
                                                            value={
                                                                itemvar.price
                                                            }
                                                        />
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ) : (
                                        <ul className="space-y-3">
                                            <li>
                                                <FormatRupiah
                                                    value={item.price}
                                                />
                                            </li>
                                        </ul>
                                    )}
                                </td>
                                <td className="text-start w-[10%] py-2">
                                    {item.variation.length > 0 ? (
                                        <ul className="space-y-3">
                                            {item.variation.map(
                                                (itemvar, i) => (
                                                    <li key={i}>
                                                        {itemvar.stock}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ) : (
                                        <ul className="space-y-3">
                                            <li>{item.stock}</li>
                                        </ul>
                                    )}
                                </td>
                                <td className="text-start w-[10%] py-2">
                                    <ul className="space-y-3">
                                        {item.sale ? (
                                            <li>{formatNumber(item.sale)}</li>
                                        ) : (
                                            <li>0</li>
                                        )}
                                    </ul>
                                </td>

                                {item.verify ? (
                                    <td className="text-start w-[10%] py-2">
                                        <ul className="text-blue-700 space-y-1 cursor-pointer hover:text-blue-900 transition decora">
                                            <li>
                                                <Link
                                                    href={route(
                                                        "product.edit",
                                                        item.id
                                                    )}
                                                    className="text-blue-700 "
                                                >
                                                    Ubah
                                                </Link>
                                            </li>
                                            {item.status === 3 ? (
                                                <li
                                                    onClick={() =>
                                                        handleLive(item.id)
                                                    }
                                                >
                                                    Tampilkan
                                                </li>
                                            ) : (
                                                <li
                                                    onClick={() =>
                                                        handleArchive(item.id)
                                                    }
                                                >
                                                    Arsipkan
                                                </li>
                                            )}

                                            <li
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                            >
                                                Hapus
                                            </li>
                                        </ul>
                                    </td>
                                ) : (
                                    <td className="text-start w-[10%] py-2">
                                        <ul className="text-blue-700 space-y-1 cursor-pointer hover:text-blue-900 transition decora">
                                            <li>
                                                <p className="text-green-400">
                                                    Checking
                                                </p>
                                            </li>

                                            <li
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                            >
                                                Hapus
                                            </li>
                                        </ul>
                                    </td>
                                )}
                            </tr>
                        );
                    })
                )}
            </tbody>
            {/* Modal Konfirmasi Arsipkan */}
            <ModalArchive
                productId={productId}
                show={showConfirmationModal}
                setShow={setShowConfirmationModal}
            />
            {/* Modal Konfirmasi Hapus */}
            <ModalDelete
                productId={productId}
                show={showDeleteModal}
                setShow={setShowDeleteModal}
            />
        </table>
    );
};

export default TableProduct;
