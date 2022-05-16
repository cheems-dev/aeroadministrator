import React from "react";
import { Button } from "@mui/material";
// Styles
import Styles from "./ExhibitorsCard.styles";

export default function ExhibitorsCard(props) {
  const { image, title, paragraph } = props;
  const { buttonContent, language, isGradient } = props;

  return (
    <Styles isGradient={isGradient}>
      <p className="sub__title">{language}</p>
      <div className="container__content">
        <div className="container__image">
          <img src={image} alt="{title}" className="image" />
        </div>
        <p className="title center">{title}</p>
        <p className="justify">{paragraph}</p>
        <Button className="button">{buttonContent}</Button>
      </div>
    </Styles>
  );
}
