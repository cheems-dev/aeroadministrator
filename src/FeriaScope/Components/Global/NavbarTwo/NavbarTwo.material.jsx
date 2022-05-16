import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

import { variables } from "../../../../AdministratorScope/config/variables";

const { fonts, palette } = variables;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 4,
  backgroundColor: palette.neutro.custom,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: palette.gray.second2,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: fonts["Nova-Rg"],
    [theme.breakpoints.up("sm")]: {
      width: "32ch",
    },
  },
}));

export { Search, SearchIconWrapper, StyledInputBase };
