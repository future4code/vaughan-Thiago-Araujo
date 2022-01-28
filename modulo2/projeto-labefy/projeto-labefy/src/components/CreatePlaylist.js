import React from "react";
import axios from "axios";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  border: 2px solid black;
  color: #000000;
  background-color: #CCAAF3; 
  justify-content: center;
  width: 20%;
  margin: 0 auto;
  padding: 30px;
  flex-direction: column;
`

class CreatePlaylist extends React.Component {
  state = {
    playlist: "",
  };

  handlePlaylistChange = (event) => {
    const newPlaylistValue = event.target.value;

    this.setState({ playlist: newPlaylistValue });
  };

  handleCreatePlaylist = () => {
    const axiosConfig = {
      headers: {
        Authorization: "thiago-henrique-vaughan"
      }
    };
    

    const body = {
      name: this.state.playlist
    };

    console.log(axiosConfig)

    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      axiosConfig
    )
    .then(() => {
      alert(`Playlist ${this.state.playlist} criada com sucesso!`)
      this.setState({playlist: ""});
    })
    .catch(() => {
      alert("Erro ao criar o playlist");
    });
  };

  criarPlay = () => {
    console.log(this.state.playlist)
  }

  render() {
    return (
    
    
       <Header>
        
        <h2>Flip Flops</h2>
        <input 
        placeholder="Nome da playlist"
        type="text"
        value={this.state.playlist}
        onChange={this.handlePlaylistChange}
        />
        <button onClick={this.handleCreatePlaylist}>Criar Playlist</button>
       
     </Header>
    );
  }
}

export default CreatePlaylist