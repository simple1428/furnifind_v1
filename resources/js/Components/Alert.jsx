import Swal from "sweetalert2";

export function SuccessAlert(message, position) {
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

export function WarningAlert(message, position) {
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
