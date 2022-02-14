import React from "react";
import styled from "styled-components";

const HomeConteiner = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 10px;

`

const Button = styled.button`
  display: flex;
  justify-content: center;
`

function Home(props) {
  return (
    <HomeConteiner>
      <h2>Rocket Pocket</h2>
      <Button onClick={() => props.goToListTripsPage()}>Ver Viagens</Button>
      <Button onClick={() => props.goToAdminHomePage()}>Área do ADM</Button>
    </HomeConteiner>
  );
}

export default Home;