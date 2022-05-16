import React, { useState } from "react";

// Components
import TitleSection from "../../../Components/Global/TitleSection/TitleSection";
import TableAllInterviews from "../../../Components/Tables/Admin/Education/Interviews/TableAllInterviews/TableAllInterviews";
import TabsNavigation from "../../../Components/Tabs/TabsNavigation/TabsNavigation";
import useGeneralInterviews from "../../../Utils/customHooks/useInterviewsQuery";

const labels = ["Todos entrevistas solicitadas", "Programas", "Empresas"];

function Interviews() {
  const [value, setValue] = useState(labels[0]);

  const { careerList } = useGeneralInterviews();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // TODO: Table bussines y person
  const tables = () => {
    switch (value) {
      case labels[0]:
        return <TableAllInterviews careerList={careerList} />;
      case labels[1]:
        return <div>{value}</div>;
      case labels[2]:
        return <div>{value}</div>;
      default:
        break;
    }
  };

  return (
    <>
      <TitleSection label={"Entrevistas"} />
      <TabsNavigation
        labels={labels}
        handleChange={handleChange}
        value={value}
      />
      {tables()}
    </>
  );
}

export default Interviews;
