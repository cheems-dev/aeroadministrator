import React from "react";

// Helpers
import { contents } from "./LegalSectionOne.helper";
// Styles
import Styles from "../LegalSection.styles";

export default function LegalSectionOne() {
  return (
    <Styles>
      <div>
        <h1 className="title">
          Aceptación de las Políticas dentro de los Acuerdos con los
          Instructores
        </h1>
        <p className="paragraph">
          Al inscribirte en nuestros cursos online, aceptas los términos y
          condiciones de nuestro servicio.
        </p>
      </div>

      <div className="containerText">
        {contents.map((content) => (
          <div key={content.id}>
            <h2 className="subtitle">{content.title}</h2>
            <p className="sub__paragraph">{content.paragraph}</p>
          </div>
        ))}
      </div>
    </Styles>
  );
}
