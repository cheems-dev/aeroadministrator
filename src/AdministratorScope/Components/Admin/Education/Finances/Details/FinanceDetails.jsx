import React, { useState } from "react";

import { Button } from "@mui/material";
import { Paper, Table, TableBody } from "@mui/material";
import { TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// React history
import history from "../../../../../../routes/history";
// Components
import SelectBasic from "../../../../Global/SelectBasic/SelectBasic";
import TitleSection from "../../../../Global/TitleSection/TitleSection";
import { dataFake, labels, selectFake } from "./FinanceDetails.helper";
// Config
import { variables } from "../../../../../config/variables";
// Styles
import Styles from "./FinanceDetails.styles";

const { palette } = variables;

export default function FinanceDetails(props) {
  const { list } = props;

  const [financeList] = useState(dataFake || list);

  return (
    <Styles>
      <TitleSection label={"Finanzas"} />
      <h1 className="title">Todos mis pagos realizados</h1>
      <p className="paragraph">
        Encuentra tus comprobantes de pago aquí después de realizado tu compra.
      </p>

      <div className="wrapper">
        <h2 className="wrapper__subTitle">Pagos realizados</h2>
        <h2
          className="wrapper__subTitle"
          onClick={() => {
            history.goBack();
          }}
        >
          Ir atrás
        </h2>
      </div>

      <div className="form">
        <h1 className="title">Todos mis pagos realizados</h1>
        <div className="form__select">
          <SelectBasic
            labels={selectFake}
            width={true}
            title={"Selecciona usuario"}
            index={true}
            color={palette.neutro.second5}
            fontColor={palette.palidBlue}
          />
          <div className="form__input">
            <p className="button button__1"> Recibo Número</p>
            <p className="button button__1"> Servicio</p>
            <p className="button button__1"> Código curso/programa</p>
            <p className="button button__2"> Total 350.00 usd</p>
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
                      className="tableComponent__text"
                      key={key.length ? key : name}
                    >
                      {name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className="tableComponent__body">
                {financeList?.length ? (
                  financeList?.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      className="tableComponent__row"
                    >
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        Cuota N° {row?.cuota || "-"}
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        {row?.fecha || "-"}
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        {row?.monto || "0"} USD
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        {row?.imagen || "-"}
                      </TableCell>
                      <TableCell className="tableComponent__text tableComponent__text--secondary">
                        <Button
                          variant="outlined"
                          className="tableComponent__button"
                        >
                          {"Enviar"}
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
    </Styles>
  );
}
