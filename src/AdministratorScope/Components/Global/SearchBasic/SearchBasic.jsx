import React from "react";
import { IconButton, TextField } from "@mui/material";

// Icons
import { FaSearch } from "react-icons/fa";
// Styles
import Styles from "./SearchBasic.style";

export default function SearchBasic(props) {
  const { label, handleGetInput } = props;

  const handleChange = (event) => {
    handleGetInput(event.target.value);
  };

  return (
    <Styles>
      <TextField
        label={label}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <IconButton>
              <FaSearch />
            </IconButton>
          ),
        }}
      />
    </Styles>
  );
}
