import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Form from "./components/Form/Form";

import PokemonInfo from "./components/ViewPokemon/PokemonInfo";

class App extends Component {
  state = {
    pokemonName: "",
  };

  formSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div>
        <Form onFormSubmit={this.formSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
