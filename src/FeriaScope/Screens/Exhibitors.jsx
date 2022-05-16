import React from "react";

// Components
import ExhibitorsBanner from "../Components/Exhibitors/Components/ExhibitorsBanner/ExhibitorsBanner";
import Separator from "../Components/Exhibitors/Components/Separator/Separator";
import ExhibitorsBody from "../Components/Exhibitors/ExhibitorsBody/ExhibitorsBody";

export default function Exhibitors() {
  return (
    <>
      <Separator />
      <ExhibitorsBanner />
      <ExhibitorsBody />
    </>
  );
}
