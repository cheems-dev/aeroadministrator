import { handleError } from '../Utils/errors/handleError';
import api from './Api';

const getCourses = () => {
  const response = api.get(`/course`).catch((error) => {
    handleError('error', 'Se produjo un error al obtener todos los cursos');
  });
  return response;
};

// TODO: Pendiente
const getCourseById = (id) => {
  if (id) {
    const response = api.get(`/course/${id}`).catch((error) => {
      handleError('error', 'No existe el curso');
    });
    return response;
  }
};

/* TODO: Error "No se encontro la URL especificada" */
const getProgressCourseById = (id) => {
  if (id) {
    const response = api.get(`/auth/course/progress/${id}`).catch((error) => {
      handleError(
        'error',
        `No existe el progreso del curso para el usuario ${id}`
      );
    });
    return response;
  }
};

export { getCourses, getCourseById, getProgressCourseById };
