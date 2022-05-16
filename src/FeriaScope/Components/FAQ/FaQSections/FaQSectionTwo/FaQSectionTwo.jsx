import React, { useState } from "react";

// Components
import Loading from "../../../../../AdministratorScope/Components/Global/Loading/Loading";
import SimpleAccordion from "../../../Global/SimpleAccordion/Accordion";
// Helper
import { questions } from "./FaQSectionTwo.helper";
// Styles
import Styles from "./FaQSectionTwo.styles";

export default function FaQSectionTwo(props) {
  const { data } = props;
  const [questionsList] = useState(questions || data.data);

  return (
    <>
      {data.isLoading ? (
        <Loading />
      ) : (
        <Styles>
          {questionsList.map((question, index) => (
            <SimpleAccordion
              key={index}
              ariaControls={question.ariaControls}
              id={question.id}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </Styles>
      )}
    </>
  );
}
