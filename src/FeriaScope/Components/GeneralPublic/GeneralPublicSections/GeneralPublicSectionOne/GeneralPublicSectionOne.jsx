import React from "react";
import { Button } from "@mui/material";

// Styles
import Styles from "./GeneralPublicSectionOne.styles";

export default function GeneralPublicSectionOne() {
  return (
    <Styles>
      <div className="container">
        <div className="container__content">
          <h1 className="title">Público general </h1>
          <p className="paragraph">
            Genera lazos económicos con organizaciones publicas y privadas de
            alto nivel y establece oportunidades de negocio.
          </p>
          <div className="container__button">
            <Button className="button button__register">Adquirir</Button>
          </div>
        </div>
      </div>
    </Styles>
  );
}
