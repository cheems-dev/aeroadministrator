import styled from "styled-components";

const Styles = styled.div`
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-16px) scale(1.03);
  }
`;

const boxStyles = { position: "relative" };

const boxStyles2 = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  paddingBottom: 4,
};

export { Styles, boxStyles, boxStyles2 };
