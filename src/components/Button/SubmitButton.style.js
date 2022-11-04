import styled from "styled-components";
import StyledButton from "./StyledButton.style";

const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))`
  border: 1px solid #B82E00;
  &:hover {
    border: 1px solid #0091C2;
  }
`;

export default SubmitButton;
