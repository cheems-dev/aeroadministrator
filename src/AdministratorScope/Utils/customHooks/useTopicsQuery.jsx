import { useQuery } from "react-query";
// Constants
import { CONSTANTS } from "../../config/constants";
// Services
import { getTopicById } from "../../services/Topics.service";

const { MIN_10 } = CONSTANTS;

const useGeneralTopicsQuery = (id) => {
  const topicData = useQuery(
    ["topicData"],
    () => {
      return getTopicById(id);
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  return { topicData };
};

export default useGeneralTopicsQuery;
