// import axios from "axios";
import React, { Component } from "react";
import PokemonError from "./PokemonError/PokemonError";
import PokemonPending from "./PokemonPending/PokemonPending";
import PokemonResolve from "./PokemonResolv/PokemonResolve";



class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
    status: "idle",
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (nextName === prevName) {
      return;
    }

    this.setState({ loading: true, status: "pending" });

    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }

          return Promise.reject(new Error(`Нет покемона с именем ${nextName}`));
        })
        .then((pokemonData) => {
          this.setState({ pokemon: pokemonData, status: "resolved" });
        })
        .catch((errorData) => {
          this.setState({ error: errorData, status: "rejected" })}
        )
        .finally(() => this.setState({ loading: false }));
    }, 1000);

    // try {
    //   axios.defaults.baseURL = "https://pokeapi.co/api/v2";
    //   const { data } = await axios(`/pokemon/${nextName}`);
    //   this.setState({ pokemon: data });

    // } catch (error) {
    //   this.setState({
    //     error: ` Нет покемона с именем ${nextName} , ${error.message}`
    //   });

    // } finally {
    //   this.setState({ loading: false });
    // }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === "idle") {
      return <h3>Введите покемона</h3>;
    }

    if (status === "pending") {
      return <PokemonPending pokemonName={pokemonName} />;
    }

    if (status === "rejected") {
      return <PokemonError error={error.message} />;
    }

    if (status === "resolved") {
      return <PokemonResolve pokemon={pokemon} />;
    }

    // return (
    //   <div>
    //     {error && <h3>{error}</h3>}
    //     {loading && <div>Загружаем...</div>}
    //     {!pokemonName && <h3>Введите покемона</h3>}
    //     {pokemon && (
    //       <div>
    //         <h2>{pokemon.name}</h2>
    //         <img
    //           src={pokemon.sprites.other["official-artwork"].front_default}
    //           alt={pokemon.name}
    //           width={240}
    //         />
    //       </div>
    //     )}
    //   </div>
    // );
  }
}

export default PokemonInfo;



















// fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
// .then((res) => {
//   if (res.ok) {
//     return res.json();
//   }

//   return Promise.reject(new Error(`Нет покемона с именем ${nextName}`)); // Пробрасываем ошибку в Promise.reject т.к. Fetch её не видит
// })
// .then((pokemonData) => {
//   this.setState({ pokemon: pokemonData, status: "resolved" });
// })
// .catch((errorData) => {
//   this.setState({ error: errorData, status: "rejected" })             // Ошибка записывается в State и уже оттуда рендерится в разметку
// })



// if (status === "rejected") {                           
//   return <PokemonError error={error.message} />;            // Вконструкторе Error есть свойсво message , его нужно вставлять в разметку  
// }











