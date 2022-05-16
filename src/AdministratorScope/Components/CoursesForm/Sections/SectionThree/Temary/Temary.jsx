import React, { useState } from "react";

// Components
import TextField from "../../../Components/TextField/TextField";
import Button from "../../../../Global/Button/Button";
// Styles
import Styles from "./Temary.styles";

const longSimplePartComponent = (index, register) => {
  return (
    <div key={index} className="Temary__section">
      <TextField
        register={register}
        required={true}
        onChange={() => {}}
        label={`Título ${index + 1}`}
        placeholder={`Título ${index + 1}`}
        className="Temary__textField"
      />
      <TextField
        register={register}
        required={true}
        onChange={() => {}}
        label={`Contenido ${index + 1}`}
        placeholder={`Contenido ${index + 1}`}
        height="96px"
        rows="5"
        className="Temary__textField"
      />
    </div>
  );
};

const Temary = (props) => {
  const { register, index, onChange } = props;

  const [section, setSection] = useState(1);

  return (
    <Styles className="Temary">
      <h2 className="Temary__title">Sesión {index}</h2>
      <TextField
        register={register}
        required={true}
        onChange={onChange}
        label={`Título de la sesión ${index}`}
        placeholder={`Título de la sesión ${index}`}
        hideLabel={true}
        className="Temary__textField"
      />

      {[...Array(section)].map((e, index) =>
        longSimplePartComponent(index, register, "allow")
      )}

      <Button
        className="Temary__button"
        type="button"
        onClick={() => setSection(section + 1)}
      >
        Añadir sección
      </Button>
    </Styles>
  );
};

export default Temary;
