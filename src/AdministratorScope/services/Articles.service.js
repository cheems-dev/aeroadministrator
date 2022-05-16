import { handleError } from '../Utils/errors/handleError';
import api from './Api';

const getArticles = () => {
  const response = api
    .get('blog')
    .then((resolve) => resolve.data)
    .then((resolve) => {
      if (!resolve.data.length) handleError('warning', 'No hay articulos ');

      return resolve;
    })
    .catch((error) => {
      handleError(
        'error',
        'Ocurrió un error al obtener los artículos, comuníquese con soporte'
      );
    });
  return response;
};

export { getArticles };
