import React from "react";
import styled from "styled-components";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "thiago-henrique-vaughan"
  }
};

class ListPlaylistDetail extends React.Component {
  state = {
    playlistDetail: {},
    playlistEdition: "editButton",
    playlist: "",
    
  };

  componentDidMount() {
    this.getPlaylistDetail();
  }

  getPlaylistDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists${
          this.props.playlistId
        }`,
        axiosConfig
      )
      .then(response => {
        this.setState({ playlistDetail: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  changePlaylistEditionFiel = () => {
    if (this.state.playlistEdition === "editButton") {
      this.setState({ playlistEdition: "playlistEditForm" });
    } else {
      this.setState({ playlistEdition: "editButton" });
    }
  };

  handlePlaylistChange = event => {
    const newPlaylistValue = event.target.value;

    this.setState({ playlist: newPlaylistValue });
  };

  handleCreatePlaylist = () => {
    const body = {
      playlist: this.state.playlist,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists${
          this.props.playlistId
        }`,
        body,
        axiosConfig
      )
      .then(() => {
        this.setState({ playlist: "",});
        this.getPlaylistDetail();
        this.changePlaylistEditionFiel();
        alert(`Playlist ${this.state.playlist} editado com sucesso!`);
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    const playlistEdition =
      this.state.playlistEdition === "editButton" ? (
        <button onClick={this.changePlaylistEditionFiel}>Editar Playlist</button>
      ) : (
        <div>
          <input
            placeholder="playlist"
            type="text"
            value={this.state.playlist}
            onChange={this.handlePlaylistChange}
          />
          <button onClick={this.handleCreatePlaylist}>Salvar edição</button>
        </div>
      );

    return (
      <div>
        <div>
          <p>{this.state.playlistDetail.playlist}</p>
        </div>
        <div>{playlistEdition}</div>
        <hr />
        <button onClick={this.props.changePage}>
          Voltar para lista de playlist
        </button>
      </div>
    );
  }
}

export default ListPlaylistDetail;