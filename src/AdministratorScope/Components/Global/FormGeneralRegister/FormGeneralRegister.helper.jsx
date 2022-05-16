import Swal from 'sweetalert2'

export const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const labelsTeacher = [
  { type: 'text', backLabel: 'name', label: 'Nombre:' },
  { type: 'text', backLabel: 'surname', label: 'Apellidos:' },
  { type: 'email', backLabel: 'personalEmail', label: 'Correo personal:' },
  { type: 'text', backLabel: 'nationality', label: 'Nacionalidad:' },
]

export const labelsTeacher2 = [
  { type: 'text', backLabel: 'email', label: 'Correo:' },
  { type: 'password', backLabel: 'password', label: 'Contraseña:' },
  {
    type: 'password',
    backLabel: 'ConfirmPassword',
    label: 'Repetir Contraseña:',
  },
]

export const labelsBusiness = [
  { type: 'text', backLabel: 'code', label: 'Código:' },
  { type: 'text', backLabel: 'organization', label: 'Organización:' },
  { type: 'text', backLabel: 'origen', label: 'Origen:' },
  { type: 'text', backLabel: 'country', label: 'Representante:' },
  { type: 'email', backLabel: 'email', label: 'Correo:' },
  { type: 'text', backLabel: 'charge', label: 'Cargo:' },
]

export const labelsBusiness2 = [
  { type: 'text', backLabel: 'username', label: 'Correo:' },
  { type: 'password', backLabel: 'password', label: 'Contraseña:' },
  {
    type: 'password',
    backLabel: 'ConfirmPassword',
    label: 'Repetir Contraseña:',
  },
]

export const titlesTeacher = [
  'Es necesario rellenar la información del nuevo profe:',
  '¡Es momento de generar una cuenta corporativa!',
]

export const titlesBusiness = [
  'Es necesario rellenar la información de la nueva empresa:',
  '¡Es momento de generar un perfil empresarial! ',
]

export const SweetError = (text) => {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: text,
  })
}

export const SweetSuccess = async (text) => {
  return await Swal.fire({
    title: 'Hecho',
    text: `¿ Deseas agregar ${text} ?`,
    showDenyButton: true,
    denyButtonText: 'Salir',
    denyButtonColor: '#3085d6',
    confirmButtonText: `Crear ${text}`,
    confirmButtonColor: '#3085d6',
  }).then((result) => (result.isConfirmed ? true : false))
}
