import { useQuery } from "react-query";

// Services
import { getParticipants } from "../../services/GeneralRegister.service";
import { getTeachers } from "../../services/GeneralRegister.service";
import { getBusiness } from "../../services/GeneralRegister.service";
import { getCertificates } from "../../services/GeneralRegister.service";
// Constants
import { CONSTANTS } from "../../config/constants";

const { MIN_10 } = CONSTANTS;

const useGeneralRegister = () => {
  const participantsList = useQuery(
    ["participantsList"],
    () => {
      return getParticipants();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  const teachersList = useQuery(
    ["teachersList"],
    () => {
      return getTeachers();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  const businessList = useQuery(
    ["businessList"],
    () => {
      return getBusiness();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  const certificatesList = useQuery(
    ["certificatesList"],
    () => {
      return getCertificates();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  return { participantsList, teachersList, businessList, certificatesList };
};

export default useGeneralRegister;
