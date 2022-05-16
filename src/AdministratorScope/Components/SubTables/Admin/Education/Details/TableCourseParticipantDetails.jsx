import React, { useState } from "react";

import { Avatar, Button, Chip } from "@mui/material";
import { Paper, Table, TableBody } from "@mui/material";
import { TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// Helper
import { variables } from "../../../../../config/variables";
// Component
import InterntCells from "../../../../Global/InterntCells/InterntCells";
// Styles
import Styles from "./TableCourseParticipantDetails.styles";
import CustomModal from "../../../../Global/Modal/Modal";
import PopUpQualifications from "../../../../Global/PopUpQualifications/PopUpQualifications";

export default function TableCourseParticipantDetails(props) {
  const { labels, list } = props;
  const { palette } = variables;

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* TODO: Actualizar con los datos traidos del endpoint */
  return (
    <Styles>
      <Paper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {labels.map((label) => (
                  <TableCell key={label}>{label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list?.length ? (
                list?.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className="textCell text">
                      <Avatar
                        alt={`${row?.name}`}
                        src={
                          row?.image ??
                          "https://mui.com/static/images/avatar/1.jpg"
                        }
                        className="iconSeparator"
                      />
                      {`${row?.name}`}
                    </TableCell>
                    <TableCell className="textCell">{row?.country}</TableCell>
                    <TableCell className="textCell">{row?.email}</TableCell>
                    <TableCell className="textCell">{row?.course}</TableCell>
                    <TableCell className="textCell">
                      <Chip
                        sx={{
                          backgroundColor: row?.condition
                            ? palette.grSecond2.c1
                            : palette.chipOrange,

                          color: palette.white,
                        }}
                        className="chip"
                        label={row?.condition ? "Aprobado" : "No aprob"}
                      />
                    </TableCell>
                    <TableCell className="textCell">
                      <Chip
                        sx={{
                          backgroundColor:
                            row?.state === "En curso"
                              ? palette.chipSuccess
                              : row?.state === "En proceso"
                              ? palette.chipWarning
                              : row?.state === "Finalizado"
                              ? palette.dark
                              : palette.chipOrange,
                          color: palette.white,
                        }}
                        className="chip"
                        label={row?.state}
                      />
                    </TableCell>
                    {/* Empieza desde aqui */}
                    <InterntCells
                      data={{
                        progress: row?.progress,
                        asistencia: row?.asistencia,
                        asistencia_total: row?.total_asistencia,
                        test_01: row?.test_01,
                        test_02: row?.test_02,
                        proyects: row?.proyect,
                        prom: row?.prom,
                        inasistencia: row?.inasistencia,
                        total: row?.total,
                      }}
                    />
                    {/* Empieza desde aqui */}
                    <TableCell className="textCell">
                      <Button
                        className="button"
                        onClick={() => {
                          handleOpen();
                          setId(row?.id);
                        }}
                      >
                        Ver Progreso
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow className="tableComponent__row">
                  <TableCell
                    colSpan={labels.length}
                    className="tableComponent__notFound"
                  >
                    😅 No hay participantes
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <CustomModal handleClose={handleClose} open={open} nStyle={2}>
        <PopUpQualifications handleClose={handleClose} id={id} />
      </CustomModal>
    </Styles>
  );
}
