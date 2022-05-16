import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Components
import TextField from "../../Components/TextField/TextField";
import Button from "../../../Global/Button/Button";
// Helpers
import { longPartComponent, shortPartComponent } from "./SectionThree.helper";
// Styles
import Styles from "./SectionThree.styles";
import Temary from "./Temary/Temary";

const SectionThree = () => {
  const [sectionA, setSectionA] = useState(1);
  const [sectionB, setSectionB] = useState(1);
  const [sectionC, setSectionC] = useState(1);
  const [temaryState, setTemaryState] = useState(1);

  const { register, handleSubmit } = useForm();
  const {
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <Styles className="SectionThree">
      <h3 className="SectionThree__warning">
        Este campo es completado por el instructor
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="SectionThree__form">
        {/* Description */}
        <h2 className="SectionThree__title">Descripción</h2>
        <TextField
          register={register}
          required={true}
          onChange={() => {}}
          label="Descripción"
          placeholder="Descripción"
          height="96px"
          rows="5"
          hideLabel={true}
          className="SectionThree__textField SectionThree__container"
        />
        {/* End Description */}
        {/* Section A */}
        <h2 className="SectionThree__title">Este curso te permitirá</h2>
        {[...Array(sectionA)].map((e, index) =>
          longPartComponent(index, register, "allow")
        )}
        <Button
          className="SectionThree__button"
          type="button"
          onClick={() => setSectionA(sectionA + 1)}
        >
          Añadir atributo
        </Button>
        {/* End Section A */}
        {/* Section B */}
        <h2 className="SectionThree__title">Con este curso aprenderás</h2>
        {[...Array(sectionB)].map((e, index) =>
          longPartComponent(index, register, "learn")
        )}
        <Button
          className="SectionThree__button"
          type="button"
          onClick={() => setSectionB(sectionB + 1)}
        >
          Añadir atributo
        </Button>
        {/* End Section B */}
        {/* Section C */}
        <h2 className="SectionThree__title">
          ¿Qué necesito para aprender este curso?
        </h2>
        {[...Array(sectionC)].map((e, index) =>
          shortPartComponent(index, register, "allow")
        )}
        <Button
          className="SectionThree__button"
          type="button"
          onClick={() => setSectionC(sectionC + 1)}
        >
          Añadir atributo
        </Button>
        {/* End Section C */}
        {/* Temario */}
        <h2 className="SectionThree__title">Temario</h2>
        {[...Array(temaryState)].map((e, index) => (
          <Temary register={register} index={index + 1} />
        ))}
        <Button
          className="SectionThree__button"
          type="button"
          onClick={() => setTemaryState(temaryState + 1)}
        >
          Añadir atributo
        </Button>
        {/* End Temario */}
        <h2 className="SectionThree__title">Metodología</h2>
        <TextField
          register={register}
          required={true}
          onChange={() => {}}
          label="Título"
          placeholder="Título"
          hideLabel={true}
          height="96px"
          rows="5"
          className="SectionThree__textField SectionThree__container"
        />

        <h2 className="SectionThree__title">Objetivo y a quien va dirigido</h2>
        <div className="SectionThree__container">
          <TextField
            register={register}
            required={true}
            onChange={() => {}}
            label="Objetivo"
            placeholder="Objetivo"
            className="SectionThree__textField"
          />
          <TextField
            register={register}
            required={true}
            onChange={() => {}}
            label="Descripción"
            placeholder="Descripción"
            height="96px"
            rows="5"
            className="SectionThree__textField"
          />
        </div>
        <div className="SectionThree__container">
          <TextField
            register={register}
            required={true}
            onChange={() => {}}
            label="Dirigido a:"
            placeholder="Dirigido a:"
            className="SectionThree__textField"
          />
          <TextField
            register={register}
            required={true}
            onChange={() => {}}
            label="Descripción"
            placeholder="Descripción"
            height="96px"
            rows="5"
            className="SectionThree__textField"
          />
        </div>
        <div className="SectionThree__container">
          <TextField
            register={register}
            required={true}
            onChange={() => {}}
            label="Metodología"
            placeholder="Metodología"
            className="SectionThree__textField"
          />
          <TextField
            register={register}
            required={true}
            onChange={() => {}}
            label="Descripción"
            placeholder="Descripción"
            height="96px"
            rows="5"
            className="SectionThree__textField"
          />
        </div>
        <Button className="SectionThree__button" type="submit">
          Guardar
        </Button>
      </form>
    </Styles>
  );
};

export default SectionThree;
