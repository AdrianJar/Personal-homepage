import { Container } from "./components/Container";
import Hero from "./components/Hero";
import { StyledTile } from "./components/Tile/styled";

function App() {
  return (
    <Container>
      <StyledTile transparent>
        <Hero />
      </StyledTile >
    </Container>
  );
}

export default App;
