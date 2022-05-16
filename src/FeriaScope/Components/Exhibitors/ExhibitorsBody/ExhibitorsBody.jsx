import React from "react";

// Components
import ExhibitorsSectionOne from "../ExhibitorsSections/ExhibitorsSectionOne/ExhibitorsSectionOne";
import ExhibitorsSectionTwo from "../ExhibitorsSections/ExhibitorsSectionTwo/ExhibitorsSectionTwo";
import ExhibitorsSectionTree from "../ExhibitorsSections/ExhibitorsSectionTree/ExhibitorsSectionTree";
import ExhibitorsSectionFive from "../ExhibitorsSections/ExhibitorsSectionFive/ExhibitorsSectionFive";
import ExhibitorsSectionFour from "../ExhibitorsSections/ExhibitorsSectionFour/ExhibitorsSectionFour";
// Styles
import Styles from "./ExhibitorsBody.styles";

export default function ExhibitorsBody() {
  return (
    <Styles>
      <ExhibitorsSectionOne />
      <ExhibitorsSectionTwo />
      <ExhibitorsSectionTree />
      <ExhibitorsSectionFour />
      <ExhibitorsSectionFive />
    </Styles>
  );
}
