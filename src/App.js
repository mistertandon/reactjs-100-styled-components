import "./App.css";
import StyledButton, { FancyButton } from "./components/Button";

function App() {
  return (
    <div className="App">
      <StyledButton variant="success">Click me</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="info">Click me</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton>Click me</FancyButton>
    </div>
  );
}

export default App;
