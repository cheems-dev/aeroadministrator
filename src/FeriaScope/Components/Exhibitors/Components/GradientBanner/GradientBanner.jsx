import React from "react";

// Components
import ExhibitorsCard from "../ExhibitorsCard/ExhibitorsCard";
//Styles
import Styles from "./GradientBanner.styles";

export default function GradientBanner(props) {
  const { cards } = props;

  return (
    <Styles>
      <div className="container__content">
        <h1 className="title__content">
          Tus productos y servicios en un espacio exclusivo.
        </h1>
        <p className="paragraph">
          Descarga el Catálogo de productos para expositores
        </p>
        <div className="container__card">
          {cards.map((card) => (
            <ExhibitorsCard
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
              language={card.language}
              isGradient={card.isGradient}
              buttonContent={card.buttonContent}
            />
          ))}
        </div>
      </div>
    </Styles>
  );
}
