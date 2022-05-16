import { handleError } from '../Utils/errors/handleError';
import api from './Api';

const getPrograms = () => {
  const response = api.get(`/program`).catch((error) => {
    handleError(
      'error',
      'Ocurrió un error al obtener todos los programas, intente más tarde'
    );
  });
  return response;
};

const getProgramById = (id) => {
  if (id) {
    const response = api
      .get(`/program/${id}`)
      .then((response) => response.data)
      .then((response) => {
        const { data } = response;

        if (data === null) handleError('warning', 'No existe el programa');

        /* TODO: Data es null, se pasa un objeto temporalmente  */
        return {};
      })
      .catch((error) => {
        handleError(
          'error',
          'Ocurrió un error al obtener todos el programa, intente más tarde'
        );
      });
    return response;
  }
};

const getProgramTemaryById = (id) => {
  if (id) {
    const response = api
      .get(`/program/${id}`)
      .then((response) => response.data)
      .then((response) => {
        const { data } = response;

        if (data === null) handleError('warning', 'No existe el programa');

        /* TODO: Data es null, se pasa un objeto temporalmente  */
        return {};
      })
      .catch((error) => {
        handleError(
          'error',
          'Ocurrió un error al obtener el temario del programa, intente más tarde'
        );
      });
    return response;
  }
};

export { getPrograms, getProgramById, getProgramTemaryById };
