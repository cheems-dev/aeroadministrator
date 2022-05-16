import React from "react";

// Components
import HomeSubSectionOne from "./HomeSubSections/HomeSubSectionOne/HomeSubSectionOne";
import HomeSubSectionTwo from "./HomeSubSections/HomeSubSectionTwo/HomeSubSectionTwo";
import HomeSubSectionTree from "./HomeSubSections/HomeSubSectionTree/HomeSubSectionTree";
import HomeSubSectionFour from "./HomeSubSections/HomeSubSectionFour/HomeSubSectionFour";
// Styles
import Styles from "./HomeSectionTree.styles";

export default function HomeSectionTree(props) {
  const { newsData, sponsorData } = props;

  return (
    <Styles>
      <HomeSubSectionOne />
      <HomeSubSectionTwo />
      <HomeSubSectionTree newsData={newsData} />
      <HomeSubSectionFour sponsorData={sponsorData} />
    </Styles>
  );
}
