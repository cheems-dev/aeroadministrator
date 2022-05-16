import React from "react";

// Components
import FaQSectionOne from "../FaQSections/FaQSectionOne/FaQSectionOne";
import FaQSectionTwo from "../FaQSections/FaQSectionTwo/FaQSectionTwo";
// Custom Hooks
import useFrequentQuestionsQuery from "../../../Utils/customHooks/useFrequentQuestionsQuery";
// Styles
import Styles from "./FaqBody.styles";

export default function FaqBody() {
  const { questionList } = useFrequentQuestionsQuery();

  return (
    <Styles>
      <FaQSectionOne />
      <FaQSectionTwo data={questionList} />
    </Styles>
  );
}
