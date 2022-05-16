import React, { useState } from "react";

// Components
import SectionOne from "./Sections/SectionOne/SectionOne";
import SectionTwo from "./Sections/SectionTwo/SectionTwo";
import SectionThree from "./Sections/SectionThree/SectionThree";
import SectionFor from "./Sections/SectionFor/SectionFor";
import SectionFive from "./Sections/SectionFive/SectionFive";

// Styles
import Styles from "./CoursesForm.styles";
import TabsNavigation from "../Tabs/TabsNavigation/TabsNavigation";

const CoursesForm = () => {
  const [value, setValue] = useState("Que vas a crear");
  const labels = [
    "Que vas a crear",
    "Acerca del curso",
    "Por instructor",
    "Preguntas frecuentes",
    "Certificado",
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Sections = () => {
    switch (value) {
      case "Que vas a crear":
        return <SectionOne />;
      case "Acerca del curso":
        return <SectionTwo />;
      case "Por instructor":
        return <SectionThree />;
      case "Preguntas frecuentes":
        return <SectionFor />;
      case "Certificado":
        return <SectionFive />;
      default:
        break;
    }
  };

  return (
    <Styles className="CoursesForm">
      <TabsNavigation
        labels={labels}
        handleChange={handleChange}
        value={value}
        className="CoursesForm__tabs"
      />
      {Sections()}
    </Styles>
  );
};

export default CoursesForm;
