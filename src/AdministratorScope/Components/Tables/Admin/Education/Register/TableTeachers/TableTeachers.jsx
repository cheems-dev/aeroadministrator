import React, { useState } from "react";

import { Avatar, Button, Chip } from "@mui/material";
import { Paper, Table, TableBody } from "@mui/material";
import { TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// Icons
import { FaUserPlus } from "react-icons/fa";
// Svg
import svg from "../../../../../../../assets/img/table-teacher-logo.svg";
// Config
import { variables } from "../../../../../../config/variables";
// Components
import FormGeneralRegister from "../../../../../Global/FormGeneralRegister/FormGeneralRegister";
import SearchBasic from "../../../../../Global/SearchBasic/SearchBasic";
import SelectBasic from "../../../../../Global/SelectBasic/SelectBasic";
import CustomModal from "../../../../../Global/Modal/Modal";
import Loading from "../../../../../Global/Loading/Loading";
// Helper
import { labels } from "./TableTeachers.helper";
// Functions
import { handleFilter } from "../../../../../../Utils/functions/handleFilter";
import { handleDynamicSort } from "../../../../../../Utils/functions/handleDynamicSort";
// Styles
import Styles from "./TableTeachers.style";

const { palette } = variables;

const TableTeachers = (props) => {
  const { teachersList } = props;
  const { isLoading, data } = teachersList;

  const [open, setOpen] = useState(false);

  const [orderArray, setOrderArray] = useState("");
  const [filterArray, setFilterArray] = useState("");

  const [list] = useState(data?.data?.data || []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                label={"Buscar profesores"}
                handleGetInput={handleGetInput}
              />{" "}
              <p className="header__text">{list.length} profesores en total</p>
            </div>
            <div className="header">
              <Button onClick={handleOpen} startIcon={<FaUserPlus />}>
                Añadir instructor
              </Button>
              <SelectBasic labels={labels} handleGetFilter={handleGetFilter} />
            </div>
            <div className="containerTable">
              <Paper className="container">
                <TableContainer component={Paper} className="tableComponent">
                  <Table aria-label="simple table">
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
                                {row?.email || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {row?.nationality || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {row?.ocupation || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                <Button
                                  variant="outlined"
                                  className="tableComponent__button"
                                >
                                  {row?.course || "-"}
                                </Button>
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
                                    row?.status
                                      ? "Sin Habilitar"
                                      : "Habilitado "
                                  }
                                />
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
                                    row?.status
                                      ? "Sin Habilitar"
                                      : "Habilitado "
                                  }
                                />
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                <div
                                  className="textIcon"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <span className="tableComponent__text">
                                    {row?.number || "-"}
                                  </span>{" "}
                                  <img
                                    src={svg}
                                    alt="logo-svg"
                                    className="icon"
                                  />
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                      ) : (
                        <TableRow className="tableComponent__row">
                          <TableCell
                            colSpan={labels.length}
                            className="tableComponent__notFound "
                          >
                            😅 No hay profesores
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </div>
            <CustomModal handleClose={handleClose} open={open}>
              <FormGeneralRegister handleClose={handleClose} type="Teachers" />
            </CustomModal>
          </Styles>
        </>
      )}
    </>
  );
};

export default TableTeachers;
