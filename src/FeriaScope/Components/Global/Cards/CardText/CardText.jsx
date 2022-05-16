import React from "react";
import { Box, Card } from "@mui/material";
import { CardMedia, Typography } from "@mui/material";

// Assets
import image from "../../../../../assets/img/Feria/Components/Card_Text.webp";
// Styles
import { Styles, boxStyles } from "./CardText.styles";
import { boxStyles2 } from "./CardText.styles";

export default function CardText(props) {
  const { name, corporation, border } = props;
  const { width, height, begin, url } = props;

  const cardStyles = {
    maxWidth: `${width}px`,
    heigth: `${height}px`,
    borderRadius: `${border}px`,
  };

  return (
    <Styles>
      <Card sx={cardStyles}>
        <Box sx={boxStyles}>
          <CardMedia
            component="img"
            height={height}
            image={url ? url : image}
          />
          <Box sx={boxStyles2}>
            <Typography variant="h5" className="title">
              {name}
            </Typography>
            <Typography variant="h6" className="number">
              {corporation}
            </Typography>
            <Typography variant="p" className="number">
              {begin ? `Inicio: ${begin}` : ""}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Styles>
  );
}
