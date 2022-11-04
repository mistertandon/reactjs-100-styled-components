import "./App.css";
import { ThemeProvider } from "styled-components";
import StyledButton, {
  FancyButton,
  SubmitButton,
  ThemeButton,
} from "./components/Button";

const THEME = {
  themeA: {
    bgColor: "#B3FFFF",
  },
  themeB: {
    bgColor: "#FFB3FF",
  },
};
function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div className="App">
        <StyledButton variant="success">Click me</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="info">Click me</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as="a">Click me</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit </SubmitButton>
        <div>
          <br />
        </div>
        <ThemeButton>Theme button</ThemeButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
