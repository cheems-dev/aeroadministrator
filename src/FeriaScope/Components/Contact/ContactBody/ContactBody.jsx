import React from "react";

// Components
import ContactSectionOne from "../ContactSections/ContactSectionOne/ContactSectionOne";
import ContactSectionTree from "../ContactSections/ContactSectionTree/ContactSectionTree";
import ContactSectionTwo from "../ContactSections/ContactSectionTwo/ContactSectionTwo";
// Custom Hooks
import useContactQuery from "../../../Utils/customHooks/useContactQuery";
// Styles
import Styles from "./ContactBody.styles";

export default function ContactBody() {
  const { contactList } = useContactQuery();

  return (
    <Styles>
      <ContactSectionOne />
      <ContactSectionTwo contactData={contactList} />
      <ContactSectionTree />
    </Styles>
  );
}
