import api from './Api';

const getNews = () => {
  const response = api
    .get(`/event/notice`)
    .then((resolve) => {
      const { data } = resolve.data;
      return data;
    })
    .catch((error) => {});

  return response;
};

export { getNews };
