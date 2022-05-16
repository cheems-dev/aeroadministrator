import React from "react";

// Components
import Button from "../../../../../AdministratorScope/Components/Global/Button/Button";
// Styles
import Styles from "./HomeSectionOne.styles";

export default function HomeSectionOne() {
  return (
    <Styles className="homeSection">
      <div className="image" />
      <div className="homeSection__content">
        <div className="homeSection__wrapper">
          <p className="homeSection__paragraph">
            Establece <br />
            <span className="homeSection__gradient">
              oportunidades de negocio
            </span>{" "}
            <br />y crece junto a los líderes
            <br /> de la industria.
          </p>
        </div>
        <Button className="homeSection__button">Contactar</Button>
      </div>
    </Styles>
  );
}
