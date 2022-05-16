import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import Styles from "./Sidebar.styles";

export default function Sidebar(props) {
  const { title, links } = props;
  return (
    <Styles>
      <h1 className="title">{title}</h1>

      {links.map((link) => (
        <p className="paragraph" key={link.id}>
          <NavLink key={link.id} to={link.url} exact activeClassName="link">
            {link.name}
          </NavLink>
        </p>
      ))}
    </Styles>
  );
}
