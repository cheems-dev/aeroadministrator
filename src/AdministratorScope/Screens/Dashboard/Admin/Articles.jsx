import React, { useState } from "react";

// Components
import ArticlesForm from "../../../Components/Admin/Education/Articles/Form/ArticlesForm";
import TitleSection from "../../../Components/Global/TitleSection/TitleSection";
import TableArticles from "../../../Components/Tables/Admin/Education/Articles/TableArticles/TableArticles";
import TabsNavigation from "../../../Components/Tabs/TabsNavigation/TabsNavigation";

// Custom Hooks
import useGeneralArticlesQuery from "../../../Utils/customHooks/useArticlesQuery";

const labels = ["Artículos por publicar", "Crear Artículos"];

export default function Articles() {
  const [value, setValue] = useState(labels[0]);
  const { articlesList } = useGeneralArticlesQuery();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tables = () => {
    switch (value) {
      case labels[0]:
        return <TableArticles articlesList={articlesList} />;
      case labels[1]:
        return <ArticlesForm />;
      default:
        break;
    }
  };

  return (
    <>
      <TitleSection label={"Artículos"} />
      <TabsNavigation
        labels={labels}
        handleChange={handleChange}
        value={value}
      />
      {tables()}
    </>
  );
}
