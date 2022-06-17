import styled from "styled-components";

export const PageFull = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #BFAF83;
`

export const ConteinerMain = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-between;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-color: #BFAF83;
  color: white;
  width: 40vw;
  height: 100vh;
`

export const ConteinerSecond = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgba(239,239,239,255);
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: nowrap;
  border-top-left-radius: 45% 90%;
  border-bottom-left-radius: 45% 90%;
`

export const H1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
`

export const H3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
`

export const IMG = styled.img`
  width: 40px;
  height: 40px;
`

export const BolinhaDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: stretch;
  align-items: center;
`

export const Bolinha = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: stretch;
  align-items: center;
  background-color: white;
  border-radius: 50px;
  padding: 10px;
  width: 50px;
  height: 50px;
  margin: 10px;
`