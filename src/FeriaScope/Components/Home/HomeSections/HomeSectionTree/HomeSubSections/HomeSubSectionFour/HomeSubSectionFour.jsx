import React, { useState } from "react";
import { Button } from "@mui/material";

//Helper
import { business } from "./HomeSubSectionFour.helper";
// Styles
import Styles from "./HomeSubSectionFour.styles";

export default function HomeSubSectionFour(props) {
  const { sponsorData } = props;

  const [sponsorList] = useState(business || sponsorData?.data);
  const [businessList] = useState(business);

  return (
    <Styles>
      <h1 className="title">Líderes que participan</h1>
      <div className="wrapper">
        {businessList.map((participant) => (
          <div key={participant.id} className="business">
            <img
              src={participant.url}
              alt={participant.description}
              key={participant.id}
            />
          </div>
        ))}
      </div>
      <div className="containerButton">
        <Button className="button">Ver más</Button>
      </div>

      <p className="paragraph">
        La Feria Internacional Aeroespacial de Lima, evento organizado por
        Sector Aeronáutico Espacial Corp y la Fuerza Aérea de Perú, surge como
        una iniciativa para impulsar a Perú en el Desarrollo Económico y
        académico en el sector aeronáutico espacial nacional, otorgándole la
        dirección del proyecto al Comité Organizador; responsable de la
        planeación, organización y materialización del evento.
      </p>

      <h1 className=" title title__two">Patrocinan</h1>
      <div className="wrapper">
        {sponsorList.map((participant) => (
          <div key={participant.id} className="business">
            <img
              src={participant.url}
              alt={participant.description}
              key={participant.id}
            />
          </div>
        ))}
      </div>
    </Styles>
  );
}
