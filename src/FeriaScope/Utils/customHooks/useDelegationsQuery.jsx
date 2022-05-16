import { useQuery } from "react-query";
// Constants
import { CONSTANTS } from "../../Config/constants";
// Services
import { getDelegationConference } from "../../Services/Delegation.service";

const { MIN_10 } = CONSTANTS;

const useDelegationConferenceQuery = () => {
  const conferenceList = useQuery(
    ["conferenceList"],
    () => {
      return getDelegationConference();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  const delegationFormList = useQuery(
    ["delegationFormList"],
    () => {
      return getDelegationConference();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );
  return { conferenceList, delegationFormList };
};

export default useDelegationConferenceQuery;
