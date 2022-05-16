import React, { useState } from "react";
import { Button, Chip, Paper } from "@mui/material";
import { Table, TableBody, TableCell } from "@mui/material";
import { TableContainer, TableHead, TableRow } from "@mui/material";

// Components
import DateSelect from "../../../../../Global/DateSelect/DateSelect";
import SearchBasic from "../../../../../Global/SearchBasic/SearchBasic";
import SelectBasic from "../../../../../Global/SelectBasic/SelectBasic";
import Loading from "../../../../../Global/Loading/Loading";

// Config
import { variables } from "../../../../../../config/variables";

// Helper
import { dataFake, labels } from "./TableArticles.helper";

// Functions
import { handleFilter } from "../../../../../../Utils/functions/handleFilter";
import { handleDynamicSort } from "../../../../../../Utils/functions/handleDynamicSort";

// Styles
import Styles from "./TableArticles.styles";

const { palette } = variables;

export default function TableArticles(props) {
  const { articlesList } = props;
  const { isLoading, data } = articlesList;

  const [list] = useState(dataFake || data?.data);

  const [orderArray, setOrderArray] = useState("");
  const [filterArray, setFilterArray] = useState("");

  const handleGetInput = (value) => {
    setFilterArray(value);
  };

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
            <SearchBasic
              label={"Buscar articulo"}
              handleGetInput={handleGetInput}
            />
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
                        /*TODO: Actualizar los campos con los obtenidos por QueryApi */
                        ?.filter((row) => handleFilter(row, filterArray))
                        ?.sort(handleDynamicSort(orderArray))
                        ?.map((row) => (
                          <TableRow
                            key={row?.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            className="tableComponent__row"
                          >
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              {row?.category || "-"}
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              {row?.title || "-"}
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button className="tableComponent__button">
                                {row?.in_charge || "-"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              {row?.date || "-"}
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              {row?.state ? "Publicado" : "-"}
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Chip
                                sx={{
                                  backgroundColor: row?.state
                                    ? palette.buttonColor
                                    : palette.dark,
                                  color: palette.white,
                                }}
                                className="chip"
                                label={
                                  row?.state ? "Deshabilitar" : "Habilitar"
                                }
                              />
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button className="tableComponent__button">
                                Ver
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                    ) : (
                      <TableRow className="tableComponent__row">
                        <TableCell
                          colSpan={labels.length}
                          className="tableComponent__notFound "
                        >
                          😅 No hay artículos
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
