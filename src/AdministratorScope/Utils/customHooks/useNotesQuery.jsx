import { useQuery } from "react-query";
// Constants
import { CONSTANTS } from "../../config/constants";
// Services
import { getNotesById } from "../../services/Notes.service";

const { MIN_10 } = CONSTANTS;

const useGeneralNotesQuery = (id) => {
  const notesData = useQuery(
    ["notesData"],
    () => {
      return getNotesById(id);
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  return { notesData };
};

export default useGeneralNotesQuery;
