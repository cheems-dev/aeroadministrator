import { handleError } from '../Utils/errors/handleError';
import api from './Api';

const getContactPart = () => {
  const response = api
    .get(`/event/contact/part`)
    .then((resolve) => {
      const { data } = resolve.data;
      return data;
    })
    .catch((error) => {});

  return response;
};

/* TODO: Endpoint Error  "No query results for model [App\\Models\\EventContactInfoModel] 1" */
const getContactInfo = () => {
  const response = api
    .get(`/event/contact/part`)
    .then((resolve) => {
      const { data } = resolve.data;
      return data;
    })
    .catch((error) => {});

  return response;
};

export { getContactPart };
