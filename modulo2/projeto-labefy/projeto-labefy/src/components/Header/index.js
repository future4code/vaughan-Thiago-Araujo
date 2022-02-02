import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #780099;
    color: #FFFFFF;
    border: solid 2px black ;
    
`

const ButtonsContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
`

const Chinelo = styled.img`
    display: flex;
    height: 70px;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <Chinelo src="https://images.vexels.com/media/users/3/175485/isolated/preview/5b47abdfe276fcdc6a227f0c8af7962d-flip-flop-sapato-mula-curso-de-chinelo-verao.png"></Chinelo>
            <h1>Flips Flops</h1>
            <ButtonsContainer>
                <button onClick={() => props.changePage("playlistCreationPage")} >Criar Playlist</button>
                <button onClick={() => props.changePage("playlistManagerPage")} >Playlists</button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header