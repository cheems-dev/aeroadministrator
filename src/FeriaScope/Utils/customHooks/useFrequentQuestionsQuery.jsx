import { useQuery } from "react-query";
// Constants
import { CONSTANTS } from "../../Config/constants";
// Services
import { getQuestion } from "../../Services/Question.service";

const { MIN_10 } = CONSTANTS;

const useFrequentQuestionsQuery = () => {
  const questionList = useQuery(
    ["questionList"],
    () => {
      return getQuestion();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  return { questionList };
};

export default useFrequentQuestionsQuery;
