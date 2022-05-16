import React, { useState } from "react";
import { Button, TableHead, TableRow } from "@mui/material";
import { Paper, Table, TableBody } from "@mui/material";
import { TableCell, TableContainer } from "@mui/material";

// Components
import SearchBasic from "../../../../../Global/SearchBasic/SearchBasic";
import SelectBasic from "../../../../../Global/SelectBasic/SelectBasic";
import Loading from "../../../../../Global/Loading/Loading";

// Helper
import { dataFake, labels, statusArray } from "./TableAllInterviews.helper";

// Functions
import { handleFilter } from "../../../../../../Utils/functions/handleFilter";
import { handleDynamicSort } from "../../../../../../Utils/functions/handleDynamicSort";

// Config
import { variables } from "../../../../../../config/variables";

// Styles
import Styles from "./TablleAllInterviews.styles";

const { palette } = variables;

export default function TableAllInterviews(props) {
  const { careerList } = props;
  const { isLoading, data } = careerList;

  const [list] = useState(data || dataFake);

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
              label={"Buscar entrevistas"}
              handleGetInput={handleGetInput}
            />
            <SelectBasic labels={labels} handleGetFilter={handleGetFilter} />
          </div>
          <div className="containerTable">
            <Paper className="container">
              <TableContainer component={Paper} className="tableComponent">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead className="tableComponent__head">
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
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
                        ?.filter((row) => handleFilter(row, filterArray))
                        ?.sort(handleDynamicSort(orderArray))
                        ?.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                            className="tableComponent__row"
                          >
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              {/*TODO: Código, no se especifica en el backend*/}
                              {/* Tal vez sea typeDoc */}
                              <Button className="tableComponent__button">
                                {row?.code || "-"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              {/*TODO: Tipo, es de tipo entero pero no sabemos que valores toma por defecto*/}
                              <Button className="tableComponent__button">
                                {row?.type || "-"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button className="tableComponent__button ">
                                {row?.country || "-"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button className="tableComponent__button">
                                {row?.name || "-"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              {/*TODO: Mensaje, no se especifica en el backend*/}
                              <Button className="tableComponent__button">
                                Ver
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button
                                className="tableComponent__button"
                                style={{
                                  color:
                                    row?.status === statusArray[0]
                                      ? palette.grSecond2.c2
                                      : row?.status === statusArray[1]
                                      ? palette.stateOk
                                      : palette.white,
                                }}
                              >
                                {row?.status}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button className="tableComponent__button">
                                {row?.email || "-"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button className="tableComponent__button">
                                {row?.phone || "-"}
                              </Button>
                            </TableCell>
                            <TableCell className="tableComponent__text tableComponent__text--secondary">
                              <Button className="tableComponent__email">
                                Enviar Mailing Cita
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
                          😅 No hay entrevistas
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
