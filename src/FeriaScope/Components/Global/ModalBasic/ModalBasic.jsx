import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

// Components
import ModalContent from "./ModalContent/ModalContent";
// Styles
import { Styles, modalStyle } from "./ModalBasic.styles";

export default function ModalBasic(props) {
  const { open, handleClose, inputs } = props;

  return (
    <Styles>
      <Modal open={open} onClose={handleClose}>
        <div className="container">
          <Box sx={modalStyle}>
            <ModalContent inputs={inputs} />
          </Box>
        </div>
      </Modal>
    </Styles>
  );
}
