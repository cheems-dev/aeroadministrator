import React, { useState } from "react";

// Components
import GradientBanner from "../../Components/GradientBanner/GradientBanner";
import ModalBasic from "../../../Global/ModalBasic/ModalBasic";
// Assets
import image from "../../../../../assets/img/Feria/Components/Icon.webp";
// Helper
import { inputs } from "./DelegationSectionFive.helper";
// Styles
import Styles from "./DelegationSectionFive.styles";

export default function DelegationSectionFive() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Styles>
      <h1 className="title">
        Inscríbete junto a tu equipo, participa en FIAL 2023 de forma exclusiva
        y rodéate con los expertos.
      </h1>
      <div className="banner">
        <GradientBanner
          src={image}
          handleOpen={handleOpen}
          title="Solicitud de inscripcion para delegaciones"
          paragraph="Revisa nuestro catalogo y escoge un stand a tu nesecidad.Si tienes
            alguna duda, por favor envianos un mensaje."
        />
      </div>
      <ModalBasic open={open} handleClose={handleClose} inputs={inputs} />
    </Styles>
  );
}
