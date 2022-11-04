import styled from "styled-components";
import StyledButton from "./StyledButton.style";
const ThemeButton = styled(StyledButton)`
  background-color: ${({
    theme: {
      themeA: { bgColor: TAbgColor },
    },
  }) => TAbgColor};
`;

export default ThemeButton;
