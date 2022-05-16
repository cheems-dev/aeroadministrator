import React from "react";

// Components
import ContactCardRow from "../../Components/ContactCardRow/ContactCardRow";
// Helper
import { cards } from "./ContactSectionTree.helper.jsx";
// Styles
import Styles from "./ContactSectionTree.styles";

export default function ContactSectionTree() {
  return (
    <Styles>
      <div className="container__component">
        <div className="container__content">
          <h1 className="title">Otros contactos </h1>
          <p className="paragraph">
            Si piensas asistir al evento, Por favor, Lee atentamente todos los
            puntos mencionados en el siguiente cuadro.
          </p>
        </div>

        <div className="container__card">
          {cards.map((card) => (
            <ContactCardRow
              key={card.id}
              title={card.title}
              image={card.image}
              paragraph={card.paragraph}
              isTransparent={card.isTransparent}
            />
          ))}
        </div>
      </div>
    </Styles>
  );
}
