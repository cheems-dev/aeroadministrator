import React from "react";

// Assets
import image from "../../../../../assets/img/Feria/Delegations/Empresas-V2-8.webp";
// Styles
import Styles from "./ExhibitorsSectionOne.styles";

export default function ExhibitorsSectionOne() {
  return (
    <Styles>
      <h1 className="title center">Por qué participar en FIAL 2023</h1>
      <div className="container__content content">
        <div className="container__image">
          <img src={image} alt="FIAL 2023" />
        </div>

        <div className="container">
          <h1 className="title">Proyecta mercados potenciales </h1>
          <p className="paragraph">
            Genera lazos económicos con organizaciones publicas y privadas de
            alto nivel y establece oportunidades de negocio.
          </p>
        </div>
      </div>
    </Styles>
  );
}
