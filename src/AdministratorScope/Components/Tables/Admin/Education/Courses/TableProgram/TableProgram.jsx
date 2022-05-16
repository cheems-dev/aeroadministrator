import React, { useState } from "react";
import { Avatar, Button, Chip } from "@mui/material";
import { Paper, Table, TableBody } from "@mui/material";
import { TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// History
import history from "../../../../../../../routes/history";

// Config
import { variables } from "../../../../../../config/variables";

// Components
import DateSelect from "../../../../../Global/DateSelect/DateSelect";
import SelectBasic from "../../../../../Global/SelectBasic/SelectBasic";
import Loading from "../../../../../Global/Loading/Loading";

// Helper
import { dataFake, labels } from "./TableProgram.helper";

// Functions
import { handleDynamicSort } from "../../../../../../Utils/functions/handleDynamicSort";

// Styles
import Styles from "./TableProgram.style";

const { palette } = variables;

export default function TableProgam(props) {
  const { programsList } = props;
  const { isLoading, data } = programsList;

  const [list] = useState(data?.data?.data || dataFake);

  const [isActive, setIsActive] = useState(true);
  const [orderArray, setOrderArray] = useState("");

  const handleGetFilter = (value) => {
    setOrderArray(value);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Styles>
          <div className="header">
            {/* Filters */}
            <div className="header__wrapper">
              <p
                className="header__text"
                onClick={() => {
                  setIsActive(true);
                }}
              >
                Programas activos
              </p>
              <p
                className="header__text"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Programas dictados
              </p>
            </div>
          </div>
          <div className="header">
            <div className="selectDate">
              <DateSelect type="Mes" className="selectDate__separator" />
              <DateSelect type="Año" />
            </div>
            <SelectBasic labels={labels} handleGetFilter={handleGetFilter} />
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
                          className="tableComponent__text"
                          key={key.length ? key : name}
                        >
                          {name}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody className="tableComponent__body">
                    {list?.length ? (
                      list
                        /* TODO: Actualizar los campos con los obtenidos por QueryApi */
                        ?.filter((row) => row?.status === isActive)
                        ?.sort(handleDynamicSort(orderArray))
                        ?.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            className="tableComponent__row"
                          >
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <div className="tableComponent__body__user">
                                <Avatar
                                  alt={`${row?.name}`}
                                  src={
                                    row?.image ||
                                    "https://mui.com/static/images/avatar/1.jpg"
                                  }
                                  className="tableComponent__body__user__avatar"
                                />
                                <Button
                                  variant="outlined"
                                  className="tableComponent__button"
                                >
                                  {row?.name || "-"}
                                </Button>
                              </div>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button
                                variant="outlined"
                                className="tableComponent__button"
                              >
                                {row?.code || "-"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              {row?.category || "-"}
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              {row?.date_ini || "-"}
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button
                                variant="outlined"
                                className="tableComponent__button"
                              >
                                {row?.n_inscritos || "-"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button
                                variant="outlined"
                                className="tableComponent__button"
                              >
                                {row?.capac || "-"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              {row?.teacher || "-"}
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
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
                                  color: row?.status
                                    ? palette.neon
                                    : palette.white,
                                }}
                                className="chip"
                                label={row?.state}
                              />
                            </TableCell>
                            <TableCell
                              className="tableComponent__text tableComponent__text--secondary"
                              onClick={() =>
                                history.push(
                                  `/admin/${
                                    row?.status ? "program" : "program-end"
                                  }/${row?.id}`
                                )
                              }
                            >
                              <Button
                                variant="outlined"
                                className="tableComponent__button"
                              >
                                {"Ver"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button
                                variant="outlined"
                                className="tableComponent__button"
                              >
                                {"Ver"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Chip
                                sx={{
                                  backgroundColor:
                                    row?.state === "En curso" ||
                                    row?.state === "En proceso"
                                      ? palette.chipAzul
                                      : row?.state === "Finalizado"
                                      ? palette.chipGrey
                                      : palette.grSecond2.c1,
                                  color: palette.white,
                                }}
                                className="chip"
                                label={
                                  row?.state === "En curso" ||
                                  row?.state === "En proceso"
                                    ? "Deshabilitar"
                                    : row?.state === "Finalizado"
                                    ? "Guardar"
                                    : "Publicar"
                                }
                              />
                            </TableCell>
                          </TableRow>
                        ))
                    ) : (
                      <TableRow className="tableComponent__row">
                        <TableCell
                          colSpan={labels.length}
                          className="tableComponent__notFound "
                        >
                          😅 No hay programas
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </Styles>
      )}
    </>
  );
}
