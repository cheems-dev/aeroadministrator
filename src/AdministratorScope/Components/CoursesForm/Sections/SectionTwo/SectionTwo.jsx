import React from "react";
import { useForm } from "react-hook-form";

// Components
import TextField from "../../Components/TextField/TextField";
import SelectField from "../../Components/SelectField/SelectField";
import Button from "../../../Global/Button/Button";
// Styles
import Styles from "./SectionTwo.styles";

const SectionTwo = () => {
  const { register, handleSubmit } = useForm();
  const {
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <Styles className="SectionTwo">
      <h2 className="SectionTwo__title">Acerca del curso</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="SectionTwo__form">
          <div className="SectionTwo__selectContent">
            <SelectField
              register={register}
              required={true}
              label="Nivel"
              placeholder="Nivel"
              width="100%"
              widthContainer="100%"
            />
            <SelectField
              register={register}
              required={true}
              label="Cuando"
              placeholder="Cuando"
              width="100%"
              widthContainer="100%"
            />
            <div className="SectionTwo__halfSize">
              <SelectField
                register={register}
                required={true}
                label="Cantidad Horas"
                placeholder="Cantidad Horas"
                width="100%"
                widthContainer="100%"
              />
              <SelectField
                register={register}
                required={true}
                label="Cantidad días"
                placeholder="Cantidad días"
                width="100%"
                widthContainer="100%"
              />
            </div>
          </div>
          <div className="SectionTwo__selectContent">
            <SelectField
              register={register}
              required={true}
              label="Audio"
              placeholder="Audio"
              width="100%"
              widthContainer="100%"
            />
            <SelectField
              register={register}
              required={true}
              label="Modalidad"
              placeholder="Modalidad"
              width="100%"
              widthContainer="100%"
            />
            <div className="SectionTwo__halfSize">
              <SelectField
                register={register}
                required={true}
                label="Horario"
                placeholder="Horario"
                width="100%"
                widthContainer="100%"
              />
              <SelectField
                register={register}
                required={true}
                label="A"
                placeholder="A"
                width="100%"
                widthContainer="100%"
              />
            </div>
          </div>
          <div className="SectionTwo__textContent">
            <TextField
              register={register}
              required={true}
              onChange={() => {}}
              label="Plataf."
              placeholder="Plataforma"
            />
            <TextField
              register={register}
              required={true}
              onChange={() => {}}
              label="precio antes"
              placeholder="Precio antes"
            />
            <TextField
              register={register}
              required={true}
              onChange={() => {}}
              label="precio ahora"
              placeholder="Precio ahora"
            />
            <TextField
              register={register}
              required={true}
              onChange={() => {}}
              label="tiempo descto"
              placeholder="tiempo descuento"
            />
          </div>
        </div>
        <TextField
          register={register}
          required={true}
          onChange={() => {}}
          label="PRESENTA  EL CURSO
          TO PAGE"
          placeholder="PRESENTA  EL CURSO
          TO PAGE"
          height="100px"
          rows="5"
        />
        <Button className="SectionTwo__button" type="submit">
          Guardar
        </Button>
      </form>
    </Styles>
  );
};

export default SectionTwo;
