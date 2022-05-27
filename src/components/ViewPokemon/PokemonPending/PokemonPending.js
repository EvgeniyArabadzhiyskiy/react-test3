import iconSettings from "../../../icons svg/icon-settings.png";
import { ImSpinner } from "react-icons/im";
import stl from "./PokemonPending.module.css";
import PokemonResolve from "../PokemonResolv/PokemonResolve";

const PokemonPending = ({ pokemonName }) => {
  const newPokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: iconSettings,
        },
      },
    },
    stats: [],
  };

  return (
    <div>
      <div>
        <ImSpinner className={stl.spiner} size={32} />
        Загружаем...
      </div>
      <PokemonResolve pokemon={newPokemon} />
    </div>
  );
};

export default PokemonPending;
