import { handleError } from '../Utils/errors/handleError';
import api from './Api';

const getTopicById = (id) => {
  if (id) {
    const response = api
      .get(`/course/temary/${id}`)
      .then((response) => response.data)
      .then((response) => {
        const { temary } = response.data;

        if (!temary.length) handleError('warning', 'Temario vacio');

        return temary;
      })
      .catch((error) => {
        handleError('warning', 'No existe el temario');
      });
    return response;
  }
};

export { getTopicById };
