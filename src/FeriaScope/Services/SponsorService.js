import api from './Api';

const getSponsor = () => {
  const response = api
    .get(`/event/sponsor`)
    .then((resolve) => {
      const { data } = resolve.data;
      return data;
    })
    .catch((error) => {});

  return response;
};

export { getSponsor };
