import React from 'react';
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  background-color: #660C97;
`
const Body = styled.body`
  display: flex;
  background-color: #E2B9F8 ;
`
const Footer = styled.footer`
  display: flex;
  background-color: #660C97 ;
`



function App() {
  return (
    <div>
      <Header>
        VAPO VAPO COMPANY 
      </Header>
      <Body>
        Corpo
      </Body>
      <Footer>
        Pássaro Azul
      </Footer>

    </div>
  );
}

export default App;