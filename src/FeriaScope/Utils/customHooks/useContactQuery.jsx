import { useQuery } from "react-query";
// Constants
import { CONSTANTS } from "../../Config/constants";
// Services
import { getContactPart } from "../../Services/Contact.service";

const { MIN_10 } = CONSTANTS;

const useContactQuery = () => {
  const contactList = useQuery(
    ["contactList"],
    () => {
      return getContactPart();
    },
    {
      enabled: true,
      staleTime: MIN_10,
    }
  );

  return { contactList };
};

export default useContactQuery;
