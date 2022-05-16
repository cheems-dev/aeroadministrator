import React from "react";
import { Card, CardMedia } from "@mui/material";

// Styles
import { Styles } from "./SimpleCard.styles";

export default function SimpleCard(props) {
  const { width, height, border } = props;
  const { image, title } = props;

  const stylesCard = {
    maxWidth: width,
    borderRadius: `${border ? border : 40}px`,
  };

  return (
    <Styles>
      <Card sx={stylesCard}>
        <CardMedia
          component="img"
          height={height ? height : "auto"}
          image={image}
          alt={title}
        />
      </Card>
      <p className="title__card">{title}</p>
    </Styles>
  );
}
