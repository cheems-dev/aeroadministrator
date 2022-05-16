import React from "react";

// Components
import HomeSectionOne from "../HomeSections/HomeSectionOne/HomeSectionOne";
import HomeSectionTwo from "../HomeSections/HomeSectionTwo/HomeSectionTwo";
import HomeSectionTree from "../HomeSections/HomeSectionTree/HomeSectionTree";
// Helper
import { cards } from "./HomeBody.helper";
// Custom Hooks
import useHomeQuery from "../../../Utils/customHooks/useHomeQuery";
// Styles
import Styles from "./HomeBody.styles";

export default function HomeBody() {
  const { newsList, sponsorList } = useHomeQuery();

  return (
    <Styles>
      <HomeSectionOne />
      <HomeSectionTwo cards={cards} />
      <HomeSectionTree newsData={newsList} sponsorData={sponsorList} />
    </Styles>
  );
}
