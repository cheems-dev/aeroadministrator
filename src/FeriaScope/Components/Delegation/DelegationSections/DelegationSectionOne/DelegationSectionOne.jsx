import React from "react";
import { Button } from "@mui/material";

// Styles
import Styles from "./DelegationSectionOne.styles";

export default function DelegationSectionOne(props) {
  const { cards } = props;

  return (
    <Styles>
      <div className="container__section">
        <div className="container__text">
          <h1 className="title">PARA DELEGACIONES</h1>
          <p className="paragraph">
            Genera lazos económicos con organizaciones publicas y privadas de
            alto nivel y establece oportunidades de negocio.
          </p>
          <p className="suParagraph">
            Visita nuestro catálogo de módulos y espacios
          </p>
          <div className="container__button">
            <Button className="button button__register">
              Registrar mi equipo
            </Button>
            <Button className="button button__contact">Contactar ahora</Button>
          </div>
        </div>
        <div className="card">
          {cards.map((card) => (
            <img
              className="image"
              key={card.id}
              src={card.url}
              alt={card.title}
            />
          ))}
        </div>
      </div>
    </Styles>
  );
}
