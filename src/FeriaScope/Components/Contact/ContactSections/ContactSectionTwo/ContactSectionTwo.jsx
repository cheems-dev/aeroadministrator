import React, { useState } from "react";

// Components
import ContactCard from "../../Components/ContactCard/ContactCard";
import Loading from "../../../../../AdministratorScope/Components/Global/Loading/Loading";
// Assets
import image from "../../../../../assets/img/Feria/Contact/Perfil.webp";
// Helpers
import { cards } from "./ContactSectionTwo.helper";
// Styles
import { Styles } from "./ContactSectionTwo.styles";

export default function ContactSectionTwo(props) {
  const { contactData } = props;
  const [contactList] = useState(cards || contactData.data);
  return (
    <Styles>
      {/* TODO: Volverlo una imagen flotante */}
      <h1 className="title">Welcome to sector aeronautico bussines</h1>
      <>
        {contactList.isLoading ? (
          <Loading />
        ) : (
          <div className="container">
            {contactList.map((card) => (
              <ContactCard
                key={card.id}
                src={image}
                title={card.title}
                corporation={card.corporation}
                paragraph={card.paragraph}
              />
            ))}
          </div>
        )}
      </>
    </Styles>
  );
}
