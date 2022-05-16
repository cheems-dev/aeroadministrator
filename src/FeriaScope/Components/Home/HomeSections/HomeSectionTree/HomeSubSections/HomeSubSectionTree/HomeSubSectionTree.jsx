import React, { useState } from "react";

// Components
import Loading from "../../../../../../../AdministratorScope/Components/Global/Loading/Loading";
import CardImageText from "../../../../../Global/Cards/CardImageText/CardImageText";
// Helper
import { news } from "./HomeSubSectionTree.helper";
// Styles
import Styles from "./HomeSubSectionTree.styles";

export default function HomeSubSectionTree(props) {
  const { newsData } = props;
  const [newList] = useState(news || newsData.data);

  return (
    <>
      {newsData.isLoading ? (
        <Loading />
      ) : (
        <Styles>
          <h1 className="titleNews">Noticias recientes</h1>

          <div className="news">
            {newList.map((article) => (
              <CardImageText
                date={article.date}
                number={article.number}
                key={article.id}
                width={320}
                height={240}
                border={16}
              />
            ))}
          </div>
        </Styles>
      )}
    </>
  );
}
