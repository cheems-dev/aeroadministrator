import React from "react";

import { Box, Modal } from "@mui/material";
// Styles
import { style, style2 } from "./Modal.styles";

const CustomModal = (props) => {
  const { open, handleClose, children, nStyle } = props;

  let modalStyle = style;

  if (nStyle) {
    switch (nStyle) {
      case 2:
        modalStyle = style2;
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>{children}</Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
