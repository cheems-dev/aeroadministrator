import React from "react";

// Assets
import image from "../../../../../assets/img/Feria/Delegations/Empresas-V2-8.webp";
// Styles
import Styles from "./DelegationSectionFour.styles";

export default function DelegationSectionFour() {
  return (
    <Styles>
      <div className="container">
        <h1 className="title">Por qué participar en FIAL 2023</h1>

        <div className="content">
          <h1 className="title">Proyecta mercados potenciales </h1>
          <p className="paragraph">
            Genera lazos económicos con organizaciones publicas y privadas de
            alto nivel y establece oportunidades de negocio.
          </p>
        </div>
      </div>
      <div className="containerImage">
        <img src={image} alt="FIAL 2023" />
      </div>
    </Styles>
  );
}
