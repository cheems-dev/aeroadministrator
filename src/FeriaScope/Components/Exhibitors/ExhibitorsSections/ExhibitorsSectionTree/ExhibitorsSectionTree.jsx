import React from "react";

// Components
import CardImageText from "../../../Global/Cards/CardImageText/CardImageText";
// Helper
import { cards } from "./ExhibitorsSectionTree.helper";
// Styles
import Styles from "./ExhibitorsSectionTree.styles";

export default function ExhibitorsSectionTree() {
  return (
    <Styles>
      <div className="container__text">
        <h1 className="title">PARA DELEGACIONES</h1>
        <p className="paragraph">
          Genera lazos económicos con organizaciones publicas y privadas de alto
          nivel y establece oportunidades de negocio.
        </p>
      </div>

      <div className="card">
        {cards.map((article) => (
          <CardImageText
            date={article.date}
            number={article.number}
            key={article.id}
            width={article.width}
            height={article.height}
            border={40}
          />
        ))}
      </div>
    </Styles>
  );
}
