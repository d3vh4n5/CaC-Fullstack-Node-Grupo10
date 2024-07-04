import Swal from 'sweetalert2'

export const Toast = Swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
});

/**
 * Ejemplo de uso:
 * 
 * Toast.fire({
        icon: "success", // este puede ser de error
        title: "Mensaje cambiado a 'Leído'"
    });
 */
