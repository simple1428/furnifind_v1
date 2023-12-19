import {
    Box,
    Container,
    PrimaryButton,
    SecondaryButton,
    SuccessAlert,
} from "@/Components/Index";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Category,
    Description,
    Image,
    ListVariation,
    Price,
    Title,
    Variation,
    Weight,
} from "./Partials/Add/Index";
import Stock from "./Partials/Add/Stock";
import useProductForm from "./Hooks/useProductForm";

export default function Edit({ product, categories }) {
    const { isSaving, form, submit, closeModal, processing } = useProductForm({
        product,
        categories,
    });

    return (
        <>
            <Head title="Edit Product" />
            <AdminLayout title="Edit Produk">
                <Container className="w-full">
                    <Box className="h-fit py-5 shadow-md mb-5">
                        <h1 className="text-md font-semibold">
                            Informasi Produk
                        </h1>
                        {/* form product */}
                        <Image form={form} />
                        <Title form={form} />
                        <Category form={form} categories={categories} />
                        <Description form={form} />
                        {/* end form product */}
                    </Box>
                    <Box className="h-fit py-5 shadow-md my-5  ">
                        <h1 className="text-md font-semibold">
                            Informasi Penjualan
                        </h1>
                        {/* form penjualan */}
                        <Variation form={form} />
                        <ListVariation form={form} />
                        <Price form={form} />
                        <Stock form={form} />
                        <Weight form={form} />
                        {/* end form penjualan */}
                    </Box>
                    <div className="  bg-white w-full  shadow-md py-5 flex justify-end items-center gap-x-3 px-3 ">
                        <Link
                            href={route("product.index")}
                            className="px-3 py-1 hover:bg-gray-100 bg-white border   transisi  border-gray-400 rounded-sm text-xs"
                        >
                            Kembali
                        </Link>

                        <PrimaryButton
                            onClick={() => submit(product.id)}
                            disabled={processing || isSaving}
                            className="px-3 py-1 hover:bg-orange-600 bg-orange-500    transisi text-white   rounded-sm text-xs "
                        >
                            {isSaving ? "Menyimpan..." : "Simpan  "}
                        </PrimaryButton>
                    </div>
                </Container>
            </AdminLayout>
        </>
    );
}
