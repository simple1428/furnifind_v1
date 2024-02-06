import Swal from "sweetalert2";

export default function ErrorAlert(message, position) {
    Swal.fire({
        position: position,
        icon: "danger",
        title: message,
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        timerProgressBar: true,
    });
}
