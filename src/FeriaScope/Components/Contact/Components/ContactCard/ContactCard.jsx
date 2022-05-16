import React from "react";
import { Card, CardContent, CardActions } from "@mui/material";
import { Typography, Button } from "@mui/material";

// Styles
import { cardStyle, colorButton, Styles } from "./ContactCard.styles.jsx";
import { typografyStyle, typografyStyleTwo } from "./ContactCard.styles.jsx";
import { typografyStyleTree } from "./ContactCard.styles.jsx";

export default function ContactCard(props) {
  const { src, title, paragraph, corporation } = props;

  return (
    <Styles src={src}>
      <div className="image" alt={title} />
      <Card sx={cardStyle}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={typografyStyle}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={typografyStyleTwo}
          >
            {corporation}
          </Typography>
          <Typography variant="body2" sx={typografyStyleTree}>
            {paragraph}
          </Typography>
        </CardContent>
        <CardActions>
          <Button xs={colorButton}>Idioma</Button>
        </CardActions>
      </Card>
    </Styles>
  );
}
