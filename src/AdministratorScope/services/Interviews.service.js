import Swal from 'sweetalert2';
import api from './Api';

const handleError = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algo salio mal, vuelve a intentarlo luego',
  });
};

const handleSuccess = () => {
  Swal.fire({
    icon: 'success',
    title: 'Éxito',
    text: 'El registro fue realizado con éxito',
  });
};

//TODO: pendiente de implementacion en el backend
const getCareer = () => {
  const response = api.get(`/admin/interview/carrer`).catch((error) => {
    handleError();
  });
  return response;
};

//TODO: pendiente de implementacion en el backend
const getBusiness = () => {
  const response = api.get(`/admin/interview/bussines`).catch((error) => {
    handleError();
  });
  return response;
};

const postCareer = (formData) => {
  // TODO: change data struct when needs
  const data = {
    email: formData?.email + '@sector-aeronautico.com',
    name: formData?.name,
    surname: formData?.surname,
    nationality: formData?.nationality,
    personalEmail: formData?.personalEmail,
    password: formData?.password,
  };

  api
    .post(`/interview/carrer`, data)
    .then(handleSuccess)
    .catch((error) => {
      handleError();
    });
};

const postBusiness = (formData) => {
  // TODO: change data struct when needs
  const data = {
    email: formData?.email + '@sector-aeronautico.com',
    name: formData?.name,
    surname: formData?.surname,
    nationality: formData?.nationality,
    personalEmail: formData?.personalEmail,
    password: formData?.password,
  };

  api
    .post(`/interview/business`, data)
    .then(handleSuccess)
    .catch((error) => {
      console.log(error.error);
      handleError();
    });
};

export { getCareer, getBusiness, postCareer, postBusiness };
