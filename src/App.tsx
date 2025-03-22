import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  return <Button>Haz clic aquí</Button>;
}

export default App;
