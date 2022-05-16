import { handleError } from '../Utils/errors/handleError';
import api from './Api';

// TODO: Error en el backend
/* "error": "SQLSTATE[23000]: Integrity constraint violation: 1052 Column 'status' in field list is ambiguous (SQL: select `live_stream`.`id`, `title`, `live_stream`.`photo`, `date`, `time`, `views`, `status`, `users`.`name`, `users`.`surname` from `live_stream` inner join `users` on `users`.`id` = `live_stream`.`teacher_id` order by `date` asc, `time` asc)",
  "code": 400 */
const getLiveStream = () => {
  const response = api.get(`/liveStream/all`).catch((error) => {
    handleError(
      'error',
      'Ocurrió un error al obtener los Live Streams, intente más tarde'
    );
  });
  return response;
};

const postLiveStream = (formData) => {
  const data = {
    title: formData?.title,
    description: formData?.description,
    photo: formData?.photo,
    url: formData?.url,
    teacher_id: formData?.teacher_id,
    date: formData?.date,
    time: formData?.time,
  };

  console.log(data);
};

export { getLiveStream, postLiveStream };
