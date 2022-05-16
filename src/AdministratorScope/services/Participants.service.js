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

const getBusiness = () => {
  const response = api.get(`/admi/list/business`).catch((error) => {
    handleError();
  });
  return response;
};

const getCertificates = () => {
  const response = api.get(`/admi/list/business`).catch((error) => {
    handleError();
  });
  return response;
};

export { getParticipants, getTeachers, getBusiness, getCertificates };
