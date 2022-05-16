import React, { useState } from "react";
import Chart from "react-apexcharts";

// Components
import { Paper, Table, Chip } from "@mui/material";
import { TableBody, TableCell, TableContainer } from "@mui/material";
import { TableHead, TableRow } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Loading from "../Loading/Loading";
// Styles
import Styles from "./PopUpQualifications.styles";
// Helpers and data important
import { colors, dataFake, labels } from "./PopUpQualifications.helper";
import { options, series, userLabels } from "./PopUpQualifications.helper";
// Config
import { variables } from "../../../config/variables";
// Custom hooks
import useGeneralCoursesQuery from "../../../Utils/customHooks/useCoursesQuery";
import useGeneralNotesQuery from "../../../Utils/customHooks/useNotesQuery";

const { palette } = variables;

function PopUpQualifications(props) {
  const { handleClose, id } = props;
  /* TODO: Endpoint obtener progreso de curso por id, tiene un error en el backend */
  const { progressCourseById } = useGeneralCoursesQuery(id);
  /* TODO: Endpoint obtener notas por id, tiene un error en el backend */
  const { notesData } = useGeneralNotesQuery(id);
  const { isLoading } = progressCourseById;

  const [label, setLabel] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setLabel(event.target.value);
  };

  return (
    <>
      {isLoading && notesData.isLoading ? (
        <Loading />
      ) : (
        <Styles className="PopUpQualifications" approved={true}>
          <div className="PopUpQualifications__flexContainer">
            <select
              name={label}
              onChange={handleChange}
              className="PopUpQualifications__select"
            >
              {userLabels?.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <div className="PopUpQualifications__flexContainer">
              <span className="PopUpQualifications__span">Aprobado</span>
              <CancelRoundedIcon
                className="PopUpQualifications__closeIcon"
                onClick={handleClose}
              />
            </div>
          </div>
          <h2 className="PopUpQualifications__title">Proceso</h2>

          <div className="PopUpQualifications__qualifications">
            <div className="PopUpQualifications__qualifications__cell">
              <h1>35</h1>
              <h2>Horas totales</h2>
            </div>
            <div className="PopUpQualifications__qualifications__cell">
              <h1>35</h1>
              <h2>Horas activas</h2>
            </div>
            <div className="PopUpQualifications__qualifications__cell">
              <h1>35</h1>
              <h2>Horas pendientes</h2>
            </div>
            <div className="PopUpQualifications__qualifications__cell">
              <h1>35</h1>
              <h2>Horas reproducción asíncrona</h2>
            </div>
            <div className="PopUpQualifications__qualifications__cell">
              <h1 className="PopUpQualifications__qualifications__customText">
                35
              </h1>
              <h2 className="PopUpQualifications__qualifications__customText">
                Promedio total
              </h2>
            </div>
          </div>

          <div className="wrapper">
            <Chart
              options={options}
              series={series}
              type="scatter"
              height={320}
              style={{
                display: "flex",
                width: "85%",
              }}
            />
            <div className="wrapper__info">
              <div className="wrapper__container">
                <p className="wrapper__number">80</p>
                <span className="wrapper__text">
                  Promedio
                  <br />
                  requerido
                </span>
              </div>

              <div className="wrapper__container separetor">
                <p className="wrapper__number">70</p>
                <span className="wrapper__text">
                  Promedio <br /> logrado
                </span>
              </div>
            </div>
          </div>

          <div className="containerTable">
            <Paper className="container">
              <TableContainer component={Paper} className="tableComponent">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead className="tableComponent__head">
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      className="tableComponent__row"
                    >
                      {labels.map(({ name, key }) => (
                        <TableCell
                          className="tableComponent__text bold"
                          key={key.length ? key : name}
                        >
                          {name}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody className="tableComponent__body">
                    {dataFake?.length ? (
                      dataFake?.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          className="tableComponent__row"
                          style={{
                            backgroundColor: colors[index],
                          }}
                        >
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            Al {row?.progress || "-"} %
                          </TableCell>
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            Test {row?.test || "-"}
                          </TableCell>

                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            {row?.note || "-"}
                          </TableCell>
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            {row?.value_test || "-"}
                          </TableCell>
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            {row?.note_test || "-"}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow className="tableComponent__row">
                        <TableCell
                          colSpan={labels.length}
                          className="tableComponent__notFound "
                        >
                          😅 No hay datos
                        </TableCell>
                      </TableRow>
                    )}
                    <TableRow
                      className="tableComponent__row"
                      style={{
                        backgroundColor: colors[3],
                      }}
                    >
                      <TableCell
                        className="tableComponent__text "
                        colSpan={2}
                        style={{
                          backgroundColor: colors[2],
                        }}
                      >
                        0 Inasistencias
                      </TableCell>
                      <TableCell className="tableComponent__text ">
                        PF
                      </TableCell>
                      <TableCell className="tableComponent__text ">
                        16.6
                      </TableCell>
                      <TableCell className="tableComponent__text ">
                        83/100
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>

          <div className="footer">
            <p className="footer__title">Renovación</p>
            <p className="footer__paragraph">Autoridad DGAC - PERU </p>
            <p className="footer__paragraph">Fecha emisión</p>
            <div className="footer__wrapper">
              <p className="footer__paragraph">Adjunto DGAC PERU</p>
              <Chip
                sx={{
                  backgroundColor: palette.textPink,
                  color: palette.white,
                }}
                className="footer__chip"
                label={"Descargar"}
              />

              <Chip
                sx={{
                  backgroundColor: palette.grSecond2.c1,
                  color: palette.white,
                }}
                className="footer__chip"
                label={"Enviar Cert. alumno"}
              />
            </div>
          </div>
        </Styles>
      )}
    </>
  );
}

export default PopUpQualifications;
