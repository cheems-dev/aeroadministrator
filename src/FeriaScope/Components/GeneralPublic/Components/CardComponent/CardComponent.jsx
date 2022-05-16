import React from "react";

// Components
import CardImageText from "../../../Global/Cards/CardImageText/CardImageText";
// Styles
import Styles from "./CardComponent.styles";

export default function CardComponent(props) {
  const { image, width, height } = props;
  const { border, title, paragraph } = props;
  const { reverse } = props;

  return (
    <Styles reverse={reverse}>
      <CardImageText
        image={image}
        width={width}
        height={height}
        border={border}
      />
      <div className="container__text">
        <h1 className="title">{title}</h1>
        <p className="paragraph">{paragraph}</p>
      </div>
    </Styles>
  );
}
