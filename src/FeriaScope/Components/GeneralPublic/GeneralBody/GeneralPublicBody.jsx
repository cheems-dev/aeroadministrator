import React from "react";

// Components
import GeneralPublicSectionOne from "../GeneralPublicSections/GeneralPublicSectionOne/GeneralPublicSectionOne";
import GeneralPublicSectionTree from "../GeneralPublicSections/GeneralPublicSectionTree/GeneralPublicSectionTree";
import GeneralPublicSectionTwo from "../GeneralPublicSections/GeneralPublicSectionTwo/GeneralPublicSectionTwo";
// Styles
import Styles from "./GeneralPublicBody.styles";

export default function GeneralPublicBody() {
  return (
    <Styles>
      <GeneralPublicSectionOne />
      <GeneralPublicSectionTwo />
      <GeneralPublicSectionTree />
    </Styles>
  );
}
