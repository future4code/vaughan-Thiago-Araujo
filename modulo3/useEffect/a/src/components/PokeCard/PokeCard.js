import React from "react";
import axios from "axios";

class PokeCard extends React.Component {
  state = {
    pokemon: {}
  };

  componentDidMount() {
    this.pegaPokemon(this.props.pokemon);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pokemon !== this.props.pokemon) {
      this.pegaPokemon(this.props.pokemon);
    }
  }

  pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        this.setState({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const pokemon = this.state.pokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }
}

export default PokeCard;
