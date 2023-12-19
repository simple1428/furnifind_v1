import Swal from "sweetalert2";

export default function WarningAlert(message, position) {
    Swal.fire({
        position: position,
        icon: "warning",
        title: message,
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        timerProgressBar: true,
    });
}
