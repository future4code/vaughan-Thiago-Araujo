import React from "react";
import axios from "axios";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  border: 2px solid black;
  color: #FFFFFF;
  background-color: #391787 ; 
`

const Body = styled.body`
  display: flex;
  background: #AB91F2;
`

class CreatePlaylist extends React.Component {
  state = {
    playlist: ""
  };

  handlePlaylistChange = (event) => {
    const newPlaylistValue = event.target.value;

    this.setState({ playlist: newPlaylistValue });
  };

  handleCreatePlaylist = () => {
    const axiosConfig = {
      header: {
        Authorization: "thiago-henrique-vaughan"
      }
    };

    const body = {
      playlist: this.state.playlist
    };

    axios
    .post(
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

  render() {
    return (
      <div>
      <Header>
        Flip Flops
      </Header>
      <Body>
        <input 
        placeholder="Nome da playlist"
        type="text"
        value={this.state.playlist}
        onChange={this.handlePlaylistChange}
        />
        <button onClick={this.handleCreatePlaylist}>Criar Playlist</button>
      </Body>
      </div>
    );
  }
}

export default CreatePlaylist