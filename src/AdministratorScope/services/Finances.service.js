import { handleError } from '../Utils/errors/handleError';
import api from './Api';

const getFinances = () => {
  const response = api.get(`/auth/payment`).catch((error) => {
    handleError(
      'error',
      'Ocurrió un error al obtener todos los programas, intente más tarde'
    );
  });
  return response;
};

export { getFinances };
