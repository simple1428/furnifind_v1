import ErrorAlert from "@/Components/ErrorAlert";
import SuccessAlert from "@/Components/SuccessAlert";

export default function IsCart(id, post, setIsLoading) {
    setIsLoading(true);
    post(route("cart.add", id), {
        preserveScroll: true,
        onSuccess: () => {
            setIsLoading(false);
            SuccessAlert("Berhasil memasukkan ke keranjang ", "bottom-end");
        },
        onError: () => {
            setIsLoading(false);
            ErrorAlert("Gagal memasukkan ke keranjang ", "bottom-end");
        },
    });
}
export function addCart(id, post) {
    post(route("cart.addcart", id), {
        preserveScroll: true,
    });
}
export function reduceCart(id, post) {
    post(route("cart.reduce", id), {
        preserveScroll: true,
    });
}
export function removeCart(id, post) {
    post(route("cart.remove", id), {
        preserveScroll: true,
    });
}
