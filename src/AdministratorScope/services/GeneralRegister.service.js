import Swal from 'sweetalert2';
import api from './Api';

const handleError = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algo salio mal, vuelve a intentarlo luego',
  });
};

const getParticipants = () => {
  const response = api.get(`/admi/list/users`).catch((error) => {
    handleError();
  });
  return response;
};

const getTeachers = () => {
  const response = api.get(`/admi/list/teachers`).catch((error) => {
    handleError();
  });
  return response;
};

const postTeacher = (formData) => {
  const data = {
    email: formData?.email + '@sector-aeronautico.com',
    name: formData?.name,
    surname: formData?.surname,
    nationality: formData?.nationality,
    personalEmail: formData?.personalEmail,
    password: formData?.password,
  };

  const response = api
    .post(`/auth/register/teacher`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.error);
      handleError();
    });

  return response;
};

const getBusiness = () => {
  const response = api.get(`/admi/list/business`).catch((error) => {
    handleError();
  });

  return response;
};

const postBusiness = (formData) => {
  const response = api
    .post(`/admi/`, formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      handleError();
    });

  return response;
};

const getCertificates = () => {
  // TODO: update certificates services when ready
  // const response = api.get(`/admi/list/certificates`).catch((error) => {
  //
  //   handleError()
  // })
  // return response
  return true;
};

export {
  getParticipants,
  getTeachers,
  getBusiness,
  getCertificates,
  postTeacher,
  postBusiness,
};
