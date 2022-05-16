import { handleError } from '../Utils/errors/handleError';
import api from './Api';

const getQuestion = () => {
  const response = api
    .get(`/event/delegation/form`)
    .then((resolve) => {
      const { data } = resolve.data;
      return data;
    })
    .catch((error) => {});

  return response;
};

export { getQuestion };
