import React from "react";
import { Box, Typography } from "@mui/material";

// Helper
import { url } from "./CardImageText.helper";
// Styles
import { Styles, boxStyleTwo } from "./CardImageText.styles";

export default function CardImageText(props) {
  const { date, number, border } = props;
  const { width, height, image } = props;

  return (
    <Styles
      image={image ? image : url}
      width={width}
      height={height}
      border={border}
    >
      <Box sx={boxStyleTwo}>
        <Typography variant="h5" className="title">
          {date}
        </Typography>
        <Typography variant="body2" className="number">
          {number}
        </Typography>
      </Box>
    </Styles>
  );
}
