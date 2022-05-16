import React from "react";

// Components
import NavbarTwo from "../../../Global/NavbarTwo/NavbarTwo";
import Sidebar from "../../../Global/Sidebar/Sidebar";
// Helper
import { links } from "./LayoutLegal.helper";
// Styles
import Styles from "./LayoutLegal.styles";

export default function LayoutLegal(props) {
  const { children } = props;

  return (
    <Styles>
      <NavbarTwo />
      <div className="container">
        <Sidebar links={links} title={"LEGAL"} />
        <div className="container__children">{children}</div>
      </div>
    </Styles>
  );
}
