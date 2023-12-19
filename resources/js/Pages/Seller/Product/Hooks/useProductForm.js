import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { SuccessAlert } from "@/Components/Index";

const useProductForm = ({ categories, product }) => {
    const [isSaving, setIsSaving] = useState(false);

    const initialData = product
        ? {
              images: [],
              title: product.title,
              category_id: product.category_id,
              description: product.description,
              variation: product.variation,
              weight: product.weight,
              price: product.price,
              stock: product.stock,
              imagesParsed: JSON.parse(product.images),
          }
        : {
              images: [],
              title: "",
              category_id: "",
              description: "",
              variation: [],
              weight: "",
              price: "",
              stock: "",
              imagesParsed: [],
          };

    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm(initialData);

    const form = {
        data: data,
        setData: setData,
        errors: errors,
    };

    const submit = async (id) => {
        setIsSaving(true);
        clearErrors();

        try {
            const routeName = product ? "product.update" : "product.store";
            await post(route(routeName, id), {
                preserveScroll: true,
                onSuccess: () => {
                    setIsSaving(false);
                    closeModal();
                    const alertMessage = product
                        ? "Produk berhasil diupdate"
                        : "Sukses menambahkan produk baru";
                    SuccessAlert(alertMessage, "bottom-end");
                },
                onError: () => setIsSaving(false),
            });
        } catch (error) {
            setIsSaving(false);
        }
    };

    const closeModal = () => {
        setIsSaving(false);
        reset();
        clearErrors();
    };

    return { isSaving, form, submit, closeModal, categories, processing };
};

export default useProductForm;
