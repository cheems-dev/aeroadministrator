import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { Avatar, Button, Chip } from "@mui/material";
import { Paper, Table, TableBody } from "@mui/material";
import { TableCell, TableContainer, TableRow } from "@mui/material";
// History - React Router
import history from "../../../../../../routes/history";
// Components
import TitleSection from "../../../../Global/TitleSection/TitleSection";
import TableCourseParticipantDetails from "../../../../SubTables/Admin/Education/Details/TableCourseParticipantDetails";
import Loading from "../../../../Global/Loading/Loading";
// Config
import { variables } from "../../../../../config/variables";
/* TODO: Eliminar cuando se haga el queryApi */
// Helper
import { alumnoCourse, dataFake } from "./CoursesDetails.helper";
import { labels, temarioFake } from "./CoursesDetails.helper";
// Custom hooks
import useGeneralCoursesQuery from "../../../../../Utils/customHooks/useCoursesQuery";
import useGeneralTopicsQuery from "../../../../../Utils/customHooks/useTopicsQuery";
// Styles
import Styles from "./CoursesDetails.styles";

const { palette } = variables;

export default function CoursesDetails() {
  const { id } = useParams();
  const { courseById } = useGeneralCoursesQuery(id);
  const { data, isLoading } = courseById;
  /* TODO: Data pendiente, dado que no existe el curso(id) a buscar  */
  const [course] = useState(dataFake || data);

  const { topicData } = useGeneralTopicsQuery(id);
  /* TODO: Data pendiente, dado que no existe el temario(id) a buscar  */
  const [topic] = useState(temarioFake || topicData?.data);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Styles>
          <TitleSection label={`Mis cursos`} />

          <div className="header">
            <p className="header__text">Cursos online activos</p>
            <p
              className="header__text"
              onClick={() => history.push("/admin/courses")}
            >
              Regresar atras
            </p>
          </div>

          <div className="containerTable">
            <Paper className="container">
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody className="tableComponent__body">
                    <TableRow
                      key={course?.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      className="tableComponent__row"
                    >
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        <div className="tableComponent__body__user">
                          <Avatar
                            alt={`${course?.name}`}
                            src={
                              course?.image ||
                              "https://mui.com/static/images/avatar/1.jpg"
                            }
                            className="tableComponent__body__user__avatar"
                          />
                          <Button
                            variant="outlined"
                            className="tableComponent__button"
                          >
                            {course?.name}
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        <Button
                          variant="outlined"
                          className="tableComponent__button"
                        >
                          {course?.code || "C12458"}
                        </Button>
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        {course?.level || "Upgrade"}
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        {course?.clases} clases en total
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        <Button
                          variant="outlined"
                          className="tableComponent__button"
                        >
                          {course?.n_inscritos} alumnos inscritos
                        </Button>
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        A cargo de {course?.teacher}
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        <Chip
                          sx={{
                            backgroundColor:
                              course?.state === "En curso"
                                ? palette.chipSuccess
                                : course?.state === "En proceso"
                                ? palette.chipWarning
                                : course?.state === "Finalizado"
                                ? palette.dark
                                : palette.chipOrange,
                            color: palette.white,
                          }}
                          className="chip"
                          label={course?.state}
                        />
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        <Button
                          variant="outlined"
                          className="tableComponent__button"
                        >
                          {"Ver"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>

          <div className="containerData">
            <div className="containerData__box">
              <div className="containerData__wrapper">
                <h1 className="containerData__title">{course?.name}</h1>
                <p className="containerData__code">Codigo: {topic?.code}</p>
              </div>
              {topic?.isLoading ? (
                <Loading />
              ) : (
                <div className="wrapperData">
                  <ul className="wrapperData__line">
                    <li>Intructor: {topic?.teacher}</li>
                    <li>Nacionalidad: {topic?.country}</li>
                    <li>Licencia: {topic?.license} </li>
                    <li>Cantidad de horas: {topic?.hours}</li>
                    <li>Duración días: {topic?.days}</li>
                    <li>Modalidad: {topic?.mod} </li>
                    <li>Fecha de inicio: {topic?.date_ini}</li>
                    <li>Fecha finalizacion: {topic?.date_end}</li>
                  </ul>
                </div>
              )}

              {/* TODO:  No existe endpoint de alumnos que llevan un curso*/}
              <TableCourseParticipantDetails
                labels={labels}
                list={alumnoCourse}
              />
              <div className="wrapperButton">
                <Button className="wrapperButton__button">Descargar</Button>
              </div>
            </div>
          </div>
        </Styles>
      )}
    </>
  );
}
