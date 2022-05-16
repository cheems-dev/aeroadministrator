import React, { useState } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

// Components
import ImageField from "../../../../CoursesForm/Components/ImageField/ImageField";
import SelectField from "../../../../CoursesForm/Components/SelectField/SelectField";
import TextField from "../../../../CoursesForm/Components/TextField/TextField";
import Loading from "../../../../Global/Loading/Loading";

// Styles
import Styles from "./LiveStreamForm.styles";

export default function LiveStreamForm(props) {
  const { teachersList } = props;
  const { isLoading, data } = teachersList;

  const [list] = useState(data?.data?.data || []);

  const labels = list?.length
    ? list.map((teacher) => ({
        index: teacher.id,
        option: `${teacher.name} ${teacher.surname}`,
      }))
    : [];

  const { register, handleSubmit } = useForm();

  const {
    formState: { errors },
  } = useForm();

  /* TODO: Use endpoint 'createLiveStream' in onSubmit*/
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Styles>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              register={register}
              required={true}
              label="Título"
              placeholder="Título"
            />

            <TextField
              register={register}
              required={true}
              label="Descripción"
              placeholder="Descripción"
              height="100px"
              rows="5"
            />

            <SelectField
              register={register}
              required={true}
              label="Hora"
              placeholder="Hora"
            />

            <SelectField
              register={register}
              required={true}
              label="A cargo de"
              placeholder="A cargo de"
              labels={labels}
            />

            <SelectField
              register={register}
              required={true}
              label="Cuando"
              placeholder="Cuando"
            />

            <div className="containerImage">
              <ImageField
                register={register}
                required={false}
                label="Imagen para Live Stream"
                width="400px"
                height="320px"
                title="Subir imagen portada"
              />
            </div>

            <div className="containerButtons">
              <Button>Borrar</Button>
              <Button type="submit">Guardar</Button>
            </div>
          </form>
        </Styles>
      )}
    </>
  );
}
