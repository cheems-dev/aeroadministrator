import React from "react";

// Components
import SimpleCard from "../../../Global/Cards/SimpleCard/SimpleCard";
// Styles
import Styles from "./HomeSectionTwo.styles";

export default function HomeSectionTwo(props) {
  const { cards } = props;

  return (
    <Styles>
      <p className="title__body">
        Desarrolla acuerdos comerciales con expertos líderes en sus rubros
      </p>
      <div className="card">
        {cards.map((card, index) => (
          <SimpleCard
            width={card.width}
            height={card.height}
            image={card.url}
            title={card.title}
            key={index}
          />
        ))}
      </div>
    </Styles>
  );
}
