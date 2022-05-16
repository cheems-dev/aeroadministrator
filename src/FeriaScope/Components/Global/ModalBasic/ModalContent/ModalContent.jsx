import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

// Components
import GradientBanner from "../../../Delegation/Components/GradientBanner/GradientBanner";
// Assets
import logo from "../../../../../assets/img/Feria/Modal/01_group.svg";
import image from "../../../../../assets/img/Feria/Components/Icon.webp";
// Styles
import Styles from "./ModalContent.styles";

export default function ModalContent(props) {
  const { inputs } = props;
  const [tnc, setTnc] = useState(false);

  const handleChange = (event) => {
    setTnc(event.target.checked);
  };

  return (
    <Styles tnc={tnc}>
      <div className="modal__container">
        <div className="modal__container__icon">
          <img src={logo} alt="Aeronautica" />
        </div>
        <h1 className="modal__title">Registro de participación FIAL 2023</h1>
        <p className="modal__paragraph">
          Por favor completa el siguiente formulario para registrar tus datos y
          agregarte a la lista del curso/taller correspondiente. Además, al ser
          alumno/a de Brand inteligente automáticamente ya cuentas con un 50% de
          descuento en cualquiera de nuestros cursos y talleres.
        </p>
        <form className="modal__container__form">
          <div className="modal__container__input">
            {inputs.map((input) => (
              <TextField
                key={input.id}
                className="modal__input"
                id={input.id_input}
                label={input.label}
                variant="outlined"
              />
            ))}
          </div>
        </form>
        <div className="modal__container__send">
          <Button className="modal__button" disabled={!tnc}>
            ENVIAR
          </Button>
          <div className="modal__checkbox">
            <input
              type="checkbox"
              name="status"
              value={true}
              onChange={handleChange}
            />{" "}
            Acepto los términos y condiciones
          </div>
          <p className="modal__question">¿Ya tienes una cuenta?</p>
        </div>
      </div>
      <div className="banner">
        <p className="banner__paragraph">
          <span className="banner__span">Reserva un Módulo o espacio.</span>
          Verifica ubicaciones y espacios disponibles{" "}
          <span className="banner__link">Aqui.</span>
        </p>

        <GradientBanner
          src={image}
          title="FORMULARIO 1/ FORM 1"
          paragraph="Revisa nuestro catalogo y escoge un stand a tu nesecidad.Si tienes
            alguna duda, por favor envianos un mensaje."
        />
      </div>
    </Styles>
  );
}
