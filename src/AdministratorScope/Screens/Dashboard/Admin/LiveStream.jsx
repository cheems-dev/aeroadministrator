import React, { useState } from "react";

// Components
import LiveStreamForm from "../../../Components/Admin/Education/LiveStreams/Form/LiveStreamForm";
import TitleSection from "../../../Components/Global/TitleSection/TitleSection";
import TableLiveStream from "../../../Components/Tables/Admin/Education/LiveStream/TableLiveStream/TableLiveStream";
import TabsNavigation from "../../../Components/Tabs/TabsNavigation/TabsNavigation";

// Custom hooks
import useGeneralLiveStreamQuery from "../../../Utils/customHooks/useLiveStreamQuery";
import useGeneralRegisterQuery from "../../../Utils/customHooks/useGeneralRegisterQuery";

const labels = ["Livestream próximos", "Crear Livestream"];

export default function LiveStream() {
  const [value, setValue] = useState(labels[0]);

  const { liveStreamList } = useGeneralLiveStreamQuery();
  const { teachersList } = useGeneralRegisterQuery();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // TODO: Cambiar tablas
  const tables = () => {
    switch (value) {
      case labels[0]:
        // TODO: Borrar cuando la API funcione correctamente
        return <TableLiveStream liveStreamList={liveStreamList} />;
      case labels[1]:
        return <LiveStreamForm teachersList={teachersList} />;
      default:
        break;
    }
  };

  return (
    <>
      <TitleSection label={"LiveStream"} />
      <TabsNavigation
        labels={labels}
        handleChange={handleChange}
        value={value}
      />
      {tables()}
    </>
  );
}
