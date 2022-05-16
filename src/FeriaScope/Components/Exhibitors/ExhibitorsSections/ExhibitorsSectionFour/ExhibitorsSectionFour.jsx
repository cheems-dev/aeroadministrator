import React from "react";

// Components
import GradientBanner from "../../Components/GradientBanner/GradientBanner";
// Helper
import { cards } from "./ExhibitorsSectionFour.helper";
// Styles
import Styles from "./ExhibitorsSectionFour.styles";

export default function ExhibitorsSectionFour() {
  return (
    <Styles>
      <GradientBanner cards={cards} />
    </Styles>
  );
}
