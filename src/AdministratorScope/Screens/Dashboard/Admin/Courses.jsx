import React, { useState } from "react";

// Components
import CoursesForm from "../../../Components/CoursesForm/CoursesForm";
import TitleSection from "../../../Components/Global/TitleSection/TitleSection";
import TableCoursesOnline from "../../../Components/Tables/Admin/Education/Courses/TableCoursesOnline/TableCoursesOnline";
import TableProgram from "../../../Components/Tables/Admin/Education/Courses/TableProgram/TableProgram";
import TabsNavigation from "../../../Components/Tabs/TabsNavigation/TabsNavigation";

// Custom Hooks
import useGeneralCoursesQuery from "../../../Utils/customHooks/useCoursesQuery";
import useGeneralProgramsQuery from "../../../Utils/customHooks/useProgramsQuery";

const labels = ["Cursos", "Programas", "Crear curso / carrera"];

function Courses() {
  const [value, setValue] = useState(labels[0]);

  const { coursesList } = useGeneralCoursesQuery();
  const { programsList } = useGeneralProgramsQuery();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // TODO: Cambiar tablas "Programas y Crear Curso/Carrera"
  const tables = () => {
    switch (value) {
      case labels[0]:
        return <TableCoursesOnline coursesList={coursesList} />;
      case labels[1]:
        return <TableProgram programsList={programsList} />;
      case labels[2]:
        return <CoursesForm />;
      default:
        break;
    }
  };

  return (
    <>
      <TitleSection label={"Cursos"} />
      <TabsNavigation
        labels={labels}
        handleChange={handleChange}
        value={value}
      />
      {tables()}
    </>
  );
}

export default Courses;
