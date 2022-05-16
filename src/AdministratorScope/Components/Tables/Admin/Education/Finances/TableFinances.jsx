import React, { useState } from "react";
import { Button, Paper, Table, TableBody } from "@mui/material";
import { TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// Components
import Loading from "../../../../Global/Loading/Loading";

// Helpers
import { dataFake, labels } from "./TableFinances.helper";

// Router
import history from "../../../../../../routes/history";

// Styles
import Styles from "./TableFinances.styles";

export default function TableFinances(props) {
  const { financesList } = props;
  const { isLoading, data } = financesList;

  const [list] = useState(dataFake || data?.data?.data);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Styles>
          <h1 className="title">Todos mis pagos realizados</h1>
          <p className="paragraph">
            Encuentra tus comprobantes de pago aquí después de realizado tu
            compra.
          </p>

          <div className="wrapper">
            <h2 className="wrapper__subTitle">Pagos realizados</h2>
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
                      list?.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          className="tableComponent__row"
                        >
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            Recibo N° {row?.recepit || "-"}
                          </TableCell>
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            {row?.to || "-"}
                          </TableCell>
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            {row?.service || "-"}
                          </TableCell>
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            {row?.code || "-"}
                          </TableCell>
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            {row?.total || "-"} USD
                          </TableCell>
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            {row?.saldo}
                          </TableCell>
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            {row?.ac}
                          </TableCell>
                          <TableCell className="tableComponent__text tableComponent__text--secondary">
                            <Button
                              className="tableComponent__button"
                              onClick={() => {
                                history.push(`/admin/finance/${row?.id}`);
                              }}
                            >
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
                          😅 No hay pagos realizados
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
          <div className="containerButtons">
            <Button onClick={() => {}}>Crear Pago</Button>
          </div>
        </Styles>
      )}
    </>
  );
}
