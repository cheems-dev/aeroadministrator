import Swal from 'sweetalert2'

/**
 * Funcion para mostrar los errores
 * @param {string} title - titulo
 * @param {string} text - texto
 */
export const handleError = (icon, text) => {
  Swal.fire({
    icon: icon,
    title: 'Atención',
    text: text,
  })
}
