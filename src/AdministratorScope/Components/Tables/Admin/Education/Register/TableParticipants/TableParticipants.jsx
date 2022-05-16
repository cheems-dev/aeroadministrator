import React, { useState } from "react";
import { Avatar, Button, Chip, Paper } from "@mui/material";
import { Table, TableBody, TableCell } from "@mui/material";
import { TableContainer, TableHead, TableRow } from "@mui/material";

// Config
import { variables } from "../../../../../../config/variables";
// Components
import SearchBasic from "../../../../../Global/SearchBasic/SearchBasic";
import SelectBasic from "../../../../../Global/SelectBasic/SelectBasic";
import Loading from "../../../../../Global/Loading/Loading";
// Helper
import { labels } from "./TableParticipants.helper";
// Functions
import { handleFilter } from "../../../../../../Utils/functions/handleFilter";
import { handleDynamicSort } from "../../../../../../Utils/functions/handleDynamicSort";
// Styles
import Styles from "./TableParticipants.styles";

const { palette } = variables;

const TableParticipants = (props) => {
  const { participantsList } = props;
  const { isLoading, data } = participantsList;

  const [orderArray, setOrderArray] = useState("");
  const [filterArray, setFilterArray] = useState("");
  const [list] = useState(data?.data?.data || []);

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
        <>
          <Styles>
            <div className="header">
              <SearchBasic
                label={"Buscar participantes"}
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
                                <div className="tableComponent__body__user">
                                  <Avatar
                                    alt={`${row?.name} ${row?.surname}`}
                                    src={
                                      row?.photo ??
                                      "https://mui.com/static/images/avatar/1.jpg"
                                    }
                                    className="tableComponent__body__user__avatar"
                                  />
                                  {`${row?.name} ${row?.surname}`}
                                </div>
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {"Program" || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {"Marzo 2021" || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {row?.country || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {row?.ocupation || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                <Chip
                                  sx={{
                                    backgroundColor: row?.status
                                      ? palette.dark
                                      : palette.white,
                                    color: row?.status
                                      ? palette.white
                                      : palette.neon,
                                  }}
                                  className="chip"
                                  label={
                                    row?.status ? "En curso" : "Sin inicio"
                                  }
                                />
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {row?.course ? row.course : "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                <Button className="tableComponent__button">
                                  Ver Resumen
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
            </div>
          </Styles>
        </>
      )}
    </>
  );
};

export default TableParticipants;
