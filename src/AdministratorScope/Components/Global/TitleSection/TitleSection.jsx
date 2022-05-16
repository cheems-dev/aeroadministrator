import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
// Styles
import Styles from "./TitleSection.style";

export default function TitleSection(props) {
  const { label } = props;
  return (
    <Styles>
      <span className="title__wrapper">
        <FaRegUserCircle className="title__icon" />
      </span>
      <p className="title__content"> {label}</p>
    </Styles>
  );
}
