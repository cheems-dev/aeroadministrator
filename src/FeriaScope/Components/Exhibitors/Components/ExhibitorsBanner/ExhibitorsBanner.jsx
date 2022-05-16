import React from "react";

import { Button } from "@mui/material";

// Styles
import Styles from "./ExhibitorsBanner.styles";

export default function ExhibitorsBanner() {
  return (
    <Styles>
      <div className="banner">
        <div className="container">
          <h1 className="title__content"> Para expositores</h1>

          <p className="paragraph">
            Genera lazos económicos con organizaciones publicas y privadas de
            alto nivel y establece oportunidades de negocio.
          </p>

          <div className="container__button">
            <Button className="button button__register">Registrarme</Button>
            <Button className="button button__contact">Contactar ahora</Button>
          </div>
        </div>
      </div>
    </Styles>
  );
}
