import React from "react";
import styled from "styled-components";
import axios from "axios";
import ListPlaylistDetail from "./ListPlaylistDetail";

const Border = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  min-width: 60px;
  justify-content: center;
  border: 2px solid black;
  padding: 10px 10px;
`

const PlaylistListItem = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 60px;
  justify-content: center;
  border-bottom: 1px solid black;
  padding: 10px 0;
`;

const DeleteButton = styled.span`
  color: purple;
  cursor: pointer;
`;

const axiosConfig = {
  headers: {
    Authorization: "thiago-henrique-vaughan"
  }
};

class ListPlaylist extends React.Component {
  state = {
    playlistList: [],
    currentPage: "playlistList",
    playlistId: "",
    playlist: ""
  };

  componentDidMount() {
    this.fetchPlaylistList();
  }

  fetchPlaylistList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks",
        axiosConfig
      )
      .then(response => {
        this.setState({ playlistList: response.data });
      });
  };

  handlePlaylistDeletion = playlistId => {
    if (window.confirm("Tem certeza que deseja apagar o playlist?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId${playlistId}`,
          axiosConfig
        )
        .then(() => {
          alert("Playlist apagada com sucesso!");
          this.fetchPlaylistList();
        })
        .catch(e => {
          alert("Erro ao apagar playlist");
        });
    }
  };

  changePage = playlistId => {
    if (this.state.currentPage === "playlistList") {
      this.setState({ currentPage: "ListPlaylistDetail", playlistId: playlistId });
    } else {
      this.setState({ currentPage: "playlistList", playlistId: "" });
    }
  };

  handlePlaylistChange = event => {
    const newPlaylistValue = event.target.value;

    this.setState({ playlist: newPlaylistValue });
  };

  handleSearchPlaylist = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string${this.state.playlist
        }`,
        axiosConfig
      )
      .then(response => {
        this.setState({ playlistList: response.data });
      })
      .catch(error => {
        alert("Erro ao criar a playlist");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.currentPage === "playlistList" ? (
          <Border>
            <h3>Lista de Playlist</h3>
            <PlaylistListItem>
              {this.state.playlistList.length === 0 && <div>Carregando...</div>}
              {this.state.playlistList.map(playlist => {
                return (
                  <PlaylistListItem>
                    <span onClick={() => this.changePage(playlist.id)}>
                      {playlist.playlist}
                    </span>
                    <DeleteButton
                      onClick={() => this.handlePlaylistDeletion(playlist.id)}
                    >
                      X
                    </DeleteButton>
                  </PlaylistListItem>
                );
              })}
            </PlaylistListItem>
            <hr />
            <h4>Procurar Playlist</h4>
            <input
              placeholder="Playlist"
              type="text"
              value={this.state.playlist}
              onChange={this.handlePlaylistChange}
            />
            <button onClick={this.handleSearchPlaylist}>Salvar edição</button>
          </Border>
        ) : (
          <ListPlaylistDetail playlistId={this.state.playlistId} changePage={this.changePage} />
        )}
      </div>
    );
  }
}

export default ListPlaylist;