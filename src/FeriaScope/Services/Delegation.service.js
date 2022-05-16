import { handleError } from '../Utils/errors/handleError';
import api from './Api';

const getDelegationConference = () => {
  const response = api
    .get(`/event/delegation/conference`)
    .then((resolve) => {
      const { data } = resolve.data;
      return data;
    })
    .catch((error) => {
      handleError('error', 'Se produjo un error todas las coferencias');
    });

  return response;
};

/*TODO: Error No query results for model [App\\Models\\EventDelegationInfoModel] 1 */
const getDelegationInfo = () => {
  const response = api
    .get(`/event/delegation/info`)
    .then((resolve) => resolve)
    .catch((error) => {
      handleError('error', 'Se produjo un error todas las coferencias');
    });

  return response;
};

/* TODO: No se entiende que hace este endpoint */
const getDelegationForm = () => {
  const response = api
    .get(`/event/delegation/form`)
    .then((resolve) => console.log(resolve))
    .catch((error) => {
      handleError('error', 'Se produjo un error');
    });

  return response;
};

export { getDelegationConference, getDelegationInfo, getDelegationForm };
