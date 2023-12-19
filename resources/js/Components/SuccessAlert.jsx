import Swal from "sweetalert2";

export default function SuccessAlert(message, position) {
    Swal.fire({
        position: position,
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        timerProgressBar: true,
    });
}
