import React, {  useState } from "react";
import { toast } from "react-toastify";

const PokemonForm = ({onFormSubmit}) => {

    const [pokemonName, setPokemonName] = useState("")

    const inputChange = (evt) => {
        setPokemonName(evt.currentTarget.value)
    };

    const formSubmit = (evt) => {
        evt.preventDefault()

        if (!pokemonName) {
           return toast.error("Введите покемона")
        }
        
        onFormSubmit(pokemonName)
        setPokemonName('')
      
    };

    return ( <form onSubmit={formSubmit} >
        <label>
            <input name="name" value={pokemonName} onChange={inputChange} />
        </label>
        <button type="submit"  >Найти</button>
    </form> );
}
 
export default PokemonForm;