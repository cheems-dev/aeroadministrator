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
import SelectBasic from "../../../../Global/SelectBasic/SelectBasic";
import Loading from "../../../../Global/Loading/Loading";
// Config
import { variables } from "../../../../../config/variables";
// Helper
import { dataFake, temarioFake, userCourse } from "./ProgramsEndDetails.helper";
import { labels, labelsSelect } from "./ProgramsEndDetails.helper";
// Custom hooks
import useGeneralProgramsQuery from "../../../../../Utils/customHooks/useProgramsQuery";
// Styles
import Styles from "./ProgramsEndDetails.styles";

const { palette } = variables;

export default function ProgramsEndDetails() {
  const { id } = useParams();
  const { programData, temaryProgramData } = useGeneralProgramsQuery(id);
  const { data, isLoading } = programData;
  const [program] = useState(dataFake || data);

  const [topic] = useState(temarioFake || temaryProgramData.data);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Styles>
          <TitleSection label={`Mis cursos`} />

          <div className="header">
            <p className="header__text">Programas online dictados </p>
            <p className="header__text" onClick={() => history.goBack()}>
              Regresar atras
            </p>
          </div>

          <div className="containerTable">
            <Paper className="container">
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody className="tableComponent__body">
                    <TableRow
                      key={program?.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      className="tableComponent__row"
                    >
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        <div className="tableComponent__body__user">
                          <Avatar
                            alt={`${program?.name}`}
                            src={
                              data?.image ||
                              "https://mui.com/static/images/avatar/1.jpg"
                            }
                            className="tableComponent__body__user__avatar"
                          />
                          <Button
                            variant="outlined"
                            className="tableComponent__button"
                          >
                            {program?.name}
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        <Button
                          variant="outlined"
                          className="tableComponent__button"
                        >
                          {program?.code || "-"}
                        </Button>
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        {program?.category || "-"}
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        {program?.total_courses || "-"} clases en total
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        <Button
                          variant="outlined"
                          className="tableComponent__button"
                        >
                          {program?.alumnos_inscritos} alumnos inscritos
                        </Button>
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        A cargo de {program?.teacher}
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        <Chip
                          sx={{
                            backgroundColor:
                              program?.state === "En curso"
                                ? palette.chipSuccess
                                : program?.state === "En proceso"
                                ? palette.chipWarning
                                : program?.state === "Finalizado"
                                ? palette.dark
                                : palette.chipOrange,
                            color: palette.white,
                          }}
                          className="chip"
                          label={program?.state}
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
                <h1 className="containerData__title">{data?.name}</h1>
                <p className="containerData__code">Codigo: {program?.code}</p>
              </div>
              <div className="wrapperContent">
                {topic?.isLoading ? (
                  <Loading />
                ) : (
                  <div className="wrapperData">
                    <ul className="wrapperData__line">
                      <li>Intructor: {topic?.instructor}</li>
                      <li>Nacionalidad: {topic?.country}</li>
                      <li>Cantidad de cursos: {topic?.courses_total} </li>
                      <li>Cantidad de horas: {topic?.hours_total}</li>
                      <li>Modalidad: {topic?.mod} </li>
                      <li>Inicio: {topic?.date_ini}</li>
                      <li>Duración: {topic?.months_total} meses</li>
                      <li>Authoridad: {topic?.auth}</li>
                      <li>Instructores: {topic?.total_instructor}</li>
                    </ul>
                  </div>
                )}
                <SelectBasic labels={labelsSelect} />
              </div>

              {/* Tabla Participantes que llevan el curso */}
              <TableCourseParticipantDetails
                labels={labels}
                list={userCourse}
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
