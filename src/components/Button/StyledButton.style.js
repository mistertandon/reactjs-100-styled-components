import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid black;
  color: ${({ variant }) => (variant === "info" ? "#ffffff" : "#000000")};
  background-color: ${({ variant }) =>
    variant === "info" ? "orange" : "#C7C7C7"};
  width: 100px;
  height: 25px;
`;

export default StyledButton;
