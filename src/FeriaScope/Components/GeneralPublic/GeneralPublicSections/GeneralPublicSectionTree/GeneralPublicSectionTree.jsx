import React from "react";

// Components
import CardImageText from "../../../Global/Cards/CardImageText/CardImageText";
// Helper
import { cards } from "./GeneralPublicSectionTree.helper";
// Styles
import Styles from "./GeneralPublicSectionTree.styles";

export default function GeneralPublicSectionTree() {
  return (
    <Styles>
      <div>
        <h1 className="title">Importante</h1>
        <p className="paragraph">
          Si piensas asistir al evento, Por favor, Lee atentamente todos los
          puntos mencionados en el siguiente cuadro.
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
            border={article.border}
          />
        ))}
      </div>
    </Styles>
  );
}
