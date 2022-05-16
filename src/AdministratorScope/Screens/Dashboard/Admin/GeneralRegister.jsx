import React, { useState } from "react";

// Components
import TitleSection from "../../../Components/Global/TitleSection/TitleSection";
import TableBusiness from "../../../Components/Tables/Admin/Education/Register/TableBusiness/TableBusiness";
import TableParticipants from "../../../Components/Tables/Admin/Education/Register/TableParticipants/TableParticipants";
import TableTeachers from "../../../Components/Tables/Admin/Education/Register/TableTeachers/TableTeachers";
import TabsNavigation from "../../../Components/Tabs/TabsNavigation/TabsNavigation";
// Custom Hooks
import useGeneralRegisterQuery from "../../../Utils/customHooks/useGeneralRegisterQuery";

const labels = [
  "Participantes",
  "Profesores",
  "Empresas",
  "Certificados & diplomas",
];

function GeneralRegister() {
  const [value, setValue] = useState(labels[0]);

  const { participantsList, teachersList } = useGeneralRegisterQuery();
  const { businessList } = useGeneralRegisterQuery();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // TODO: Pendiente tabla 'Certificados & Diplomas'
  const tables = () => {
    switch (value) {
      case labels[0]:
        return <TableParticipants participantsList={participantsList} />;
      case labels[1]:
        return <TableTeachers teachersList={teachersList} />;
      case labels[2]:
        return <TableBusiness businessList={businessList} />;
      case labels[3]:
        return <div>Certificados </div>;
      default:
        break;
    }
  };

  return (
    <>
      <TitleSection label={"Registro General"} />
      <TabsNavigation
        labels={labels}
        handleChange={handleChange}
        value={value}
      />
      {tables()}
    </>
  );
}

export default GeneralRegister;
