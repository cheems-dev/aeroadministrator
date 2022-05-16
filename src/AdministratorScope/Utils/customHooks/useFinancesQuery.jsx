import { useQuery } from "react-query";
// Constants
import { CONSTANTS } from "../../config/constants";
// Services
import { getFinances } from "../../services/Finances.service";

const { MIN_10 } = CONSTANTS;

const useGeneralFinancesQuery = () => {
  const financesList = useQuery(
    ["financesList"],
    () => {
      return getFinances();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  return { financesList };
};

export default useGeneralFinancesQuery;
