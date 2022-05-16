import React, { useState } from "react";

import { Avatar, Button, Chip } from "@mui/material";
import { Paper, Table, TableBody } from "@mui/material";
import { TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { FaUserPlus } from "react-icons/fa";
// Config
import { variables } from "../../../../../../config/variables";
// Components
import FormGeneralRegister from "../../../../../Global/FormGeneralRegister/FormGeneralRegister";
import SearchBasic from "../../../../../Global/SearchBasic/SearchBasic";
import SelectBasic from "../../../../../Global/SelectBasic/SelectBasic";
import CustomModal from "../../../../../Global/Modal/Modal";
import Loading from "../../../../../Global/Loading/Loading";
// Helper
import { labels } from "./TableBusiness.helper";
// Functions
import { handleDynamicSort } from "../../../../../../Utils/functions/handleDynamicSort";
import { handleFilter } from "../../../../../../Utils/functions/handleFilter";
// Styles
import Styles from "./TableBussines.style";

const { palette } = variables;

const TableBusiness = (props) => {
  const { businessList } = props;
  const { isLoading, data } = businessList;

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
                label={"Buscar empresa"}
                handleGetInput={handleGetInput}
              />
              <p className="header__text">{list.length} empresas en total</p>
            </div>
            <div className="header">
              <Button onClick={handleOpen} startIcon={<FaUserPlus />}>
                Añadir Empresa
              </Button>
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
                            key={key?.length ? key : name}
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
                                      row?.photo ||
                                      "https://mui.com/static/images/avatar/1.jpg"
                                    }
                                    className="tableComponent__body__user__avatar"
                                  />
                                  {`${row?.name} ${row?.surname}`}
                                </div>
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {row?.num_doc || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {row?.date || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {row?.country || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {row?.qualification || "-"}
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
                                {/*TODO: Encargado, no se especifica en el backend*/}
                                {row?.name || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {/*TODO: Name Course, no se especifica */}
                                {row?.course || "-"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                {row?.status ? "Si" : "No"}
                              </TableCell>
                              <TableCell className="tableComponent__text tableComponent__text--secondary">
                                <Chip
                                  sx={{
                                    backgroundColor: row?.status
                                      ? palette.palidBlueLight
                                      : palette.dark,
                                    color: palette.white,
                                  }}
                                  className="chip"
                                  label={
                                    row?.status ? "Habilitar" : "Deshabilitar "
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
                            😅 No hay empresas
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </div>
            <CustomModal handleClose={handleClose} open={open}>
              <FormGeneralRegister handleClose={handleClose} type="Business" />
            </CustomModal>
          </Styles>
        </>
      )}
    </>
  );
};

export default TableBusiness;
