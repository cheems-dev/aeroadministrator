import { handleError } from '../Utils/errors/handleError';
import api from './Api';

/* TODO: Error "No se encontro la URL especificada" */
const getNotesById = (id) => {
  if (id) {
    const response = api.get(`/admin/notes/${id}`).catch((error) => {
      handleError('warning', `No existe notas del usuario ${id}`);
    });
    return response;
  }
};

export { getNotesById };
