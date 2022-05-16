import React from "react";
import Navbar from "../Navbar/Navbar";

export default function LayoutFeria(props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
