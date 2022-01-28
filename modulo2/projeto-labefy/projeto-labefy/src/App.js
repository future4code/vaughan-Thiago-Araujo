import React from "react";
import CreatePlaylist from "./components/CreatePlaylist";
import ListPlaylist from "./components/ListPlaylist"

export default class App extends React.Component {
  state = {
    currentPage: "CreatePlaylist"
  };

  changePage = () => {
    if (this.state.currentPage === "CreatePlaylist") {
      this.setState({ currentPage: "ListPlaylist" });
    } else {
      this.setState({ currentPage: "CreatePlaylist" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.changePage}>Trocar de tela</button>
        {this.state.currentPage === "CreatePlaylist" ? <CreatePlaylist /> : <ListPlaylist />}
      </div>
    );
  }
}

