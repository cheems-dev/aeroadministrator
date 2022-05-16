import React from "react";

// Components
import TitleSection from "../../../Components/Global/TitleSection/TitleSection";
import TableFinances from "../../../Components/Tables/Admin/Education/Finances/TableFinances";

// Custom Hook
import useGeneralFinancesQuery from "../../../Utils/customHooks/useFinancesQuery";

const labels = ["Finanzas"];

export default function Finance() {
  const { financesList } = useGeneralFinancesQuery();

  return (
    <>
      <TitleSection label={labels[0]} />
      <TableFinances financesList={financesList} />
    </>
  );
}
