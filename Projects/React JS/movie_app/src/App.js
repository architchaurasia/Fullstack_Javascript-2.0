import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #000000;
  color: #ffffff;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
function App() {
  return (
    <Container>
      <Header>
        <AppName>Movie App</AppName>
      </Header>
      <h1>Hey React</h1>
    </Container>
  );
}

export default App;
