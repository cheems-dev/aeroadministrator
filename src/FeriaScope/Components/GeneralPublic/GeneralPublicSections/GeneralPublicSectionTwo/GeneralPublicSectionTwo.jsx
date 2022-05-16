import React from "react";

// Components
import CardComponent from "../../Components/CardComponent/CardComponent";
// Helper
import { cards } from "./GeneralPublicSectionTwo.helper";
// Styles
import Styles from "./GeneralPublicSectionTwo.styles";

export default function GeneralPublicSectionTwo() {
  return (
    <Styles>
      {cards.map((card) => (
        <CardComponent
          key={card.id}
          image={card.image}
          width={480}
          height={480}
          border={40}
          title={card.title}
          paragraph={card.paragraph}
          reverse={card.inverse}
        />
      ))}
    </Styles>
  );
}
