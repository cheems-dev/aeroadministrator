import { handleError } from '../Utils/errors/handleError';
import api from './Api';

/* TODO: 400 - "error": "No query results for model [App\\Models\\EventBusinessCatalogueModel] 1", */
const getBusinessInfo = () => {
  const response = api
    .get(`/event/bussines/info`)
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((error) => {});

  return response;
};

export { getBusinessInfo };
