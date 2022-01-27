import React from "react";
import CreatePlaylist from "./components/CreatePlaylist";

export default class App extends React.Component {
  state = {
    currentPage: "CreatePlaylist"
  };

  changePage = () => {
    if (this.state.currentPage === "CreatePlaylist") {
      this.setState({ currentPage: "users" });
    } else {
      this.setState({ currentPage: "CreatePlaylist" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.changePage}>Trocar de tela</button>
        {this.state.currentPage === "CreatePlaylist" ? <CreatePlaylist /> : <Users />}
      </div>
    );
  }
}

