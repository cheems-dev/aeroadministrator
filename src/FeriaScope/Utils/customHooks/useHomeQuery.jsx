import { useQuery } from "react-query";
// Constants
import { CONSTANTS } from "../../Config/constants";
// Services
import { getNews } from "../../Services/NewService";
import { getSponsor } from "../../Services/SponsorService";

const { MIN_10 } = CONSTANTS;

const useHomeQuery = () => {
  const newsList = useQuery(
    ["newsList"],
    () => {
      return getNews();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  const sponsorList = useQuery(
    ["sponsorList"],
    () => {
      return getSponsor();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  return { newsList, sponsorList };
};

export default useHomeQuery;
