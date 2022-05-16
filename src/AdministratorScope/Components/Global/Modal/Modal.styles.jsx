import { variables } from "../../../config/variables";

const { gradients, palette } = variables;

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 752,
  borderRadius: 8,
  background: gradients.second2,
  p: 4,
  boxShadow: 24,
  zIndex: 800,
};

export const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1504,
  borderRadius: 4,
  background: palette.neon,
  p: 4,
  boxShadow: 24,
  zIndex: 800,
};
