import React from "react";

// Styles
import Styles from "./PlainImage.styles";

export default function PlainImage(props) {
  const { src, description } = props;
  const { width, height } = props;
  const { radius, padding } = props;

  return (
    <Styles radius={radius} padding={padding} width={width} height={height}>
      <img className="image" src={src} alt={description} />
    </Styles>
  );
}
