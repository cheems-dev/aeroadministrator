import React from "react";

// Components
import IconText from "../../Components/IconText/IconText";
// Assets
import { data } from "./ExhibitorsSectionTwo.helper";
// Styles
import Styles from "./ExhibitorsSectionTwo.styles";

export default function ExhibitorsSectionTwo() {
  return (
    <Styles>
      <div className="container">
        {data.map((raw) => (
          <IconText
            key={raw.id}
            icon={raw.icon}
            alt={raw.title}
            title={raw.title}
            amount={raw.amount}
          />
        ))}
      </div>
    </Styles>
  );
}
