import React from "react";
import styled from "styled-components";
import Main from "./components/Main/Main";
import ResetButton from "./components/ResetButton/ResetButton";

const Titulo = styled.h1`
  display: flex;
  color: #7D00B8;
  justify-content: center;
`

function App() {
  return (
    <div>
      <Titulo>VAPO VAPO</Titulo>
      <Main />
      <ResetButton />
    </div>
  );
}

export default App;