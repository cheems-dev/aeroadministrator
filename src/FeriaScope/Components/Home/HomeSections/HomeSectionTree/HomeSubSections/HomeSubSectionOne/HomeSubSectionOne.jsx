import React from "react";

// Assets
import imageOne from "../../../../../../../assets/img/Feria/Home/01_image.webp";
import imageTwo from "../../../../../../../assets/img/Feria/Home/02_image.webp";
// Styles
import Styles from "./HomeSubSectionOne.styles";

export default function HomeSubSectionOne() {
  return (
    <Styles>
      <div className="section">
        <div className="section__wrapper">
          <p className="section__paragraph">
            FIAL es un evento de{" "}
            <span className="section__gradient">
              encuentro empresarial internacional de la industria aeronáutica
            </span>{" "}
            espacial y afines. Potenciamos nuestras actividades a traves de:
          </p>
        </div>
        <img className="image" src={imageOne} alt="MeetpUp Aeronautica" />
      </div>

      <div className="sectionTwo">
        <img className="image" src={imageTwo} alt="MeetpUp Aeronautica" />
        <div className="section__wrapper" />
      </div>

      <div className="sectionTree">
        <img className="image" src={imageTwo} alt="MeetpUp Aeronautica" />
        <div className="section__wrapper" />
      </div>
    </Styles>
  );
}
