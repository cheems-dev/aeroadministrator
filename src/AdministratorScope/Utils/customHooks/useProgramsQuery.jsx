import { useQuery } from "react-query";
// Constants
import { CONSTANTS } from "../../config/constants";
// Services
import { getPrograms, getProgramById } from "../../services/Program.service";
import { getProgramTemaryById } from "../../services/Program.service";

const { MIN_10 } = CONSTANTS;

const useGeneralProgramsQuery = (id) => {
  const programsList = useQuery(
    ["programsList"],
    () => {
      return getPrograms();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  const programData = useQuery(
    ["programData"],
    () => {
      return getProgramById(id);
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  const temaryProgramData = useQuery(
    ["temaryData"],
    () => {
      return getProgramTemaryById(id);
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  return { programsList, programData, temaryProgramData };
};

export default useGeneralProgramsQuery;
