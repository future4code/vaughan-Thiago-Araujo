import React from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

class App extends React.Component {
  state = {   
    pokeList: [],
    pokeName: ""
  };

  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        this.setState({ pokeList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  changePokeName = event => {
    this.setState({ pokeName: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <select onChange={this.changePokeName}>
          <option value={""}>Nenhum</option>
          {this.state.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
      </div>
    );
  }
}

export default App;
