import { useForm } from "@inertiajs/react";

export default function IsLike(id, post) {
    post(route("product.like", id), {
        preserveScroll: true,
    });
}
