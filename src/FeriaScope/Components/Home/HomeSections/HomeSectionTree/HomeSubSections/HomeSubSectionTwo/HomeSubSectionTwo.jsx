import React from "react";

// Components
import PlainImage from "../../../../../Global/PlainImage/PlainImage";
// Helpers
import { card, cards } from "./HomeSubSectionTwo.helper";
// Styles
import Styles from "./HomeSubSectionTwo.styles";

export default function HomeSubSectionTwo() {
  return (
    <Styles>
      <div className="paragraph">
        <div>
          <p className="paragraph__one">
            Potenciamos el ecosistema Aeronautico Espacial para promover,
            Desarrollar y crear nuevas oportunidades.
          </p>
          <p className="paragraph__two">
            Genera lazos económicos con organizaciones publicas y privadas de
            alto nivel y establece oportunidades de negocio.
          </p>
        </div>
      </div>

      <PlainImage
        src={card.src}
        description={card.description}
        width={card.width}
        height={card.height}
        radius={card.radius}
        padding={card.padding}
      />

      <div>
        {cards.map((card) => (
          <PlainImage
            key={card.id}
            src={card.src}
            description={card.description}
            width={card.width}
            height={card.height}
            radius={card.radius}
            padding={card.padding}
          />
        ))}
      </div>
    </Styles>
  );
}
