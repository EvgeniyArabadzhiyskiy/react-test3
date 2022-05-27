import iconTrash from "../../../icons svg/free-icon-trash-263067.png";


const PokemonError = ({error}) => {
    return  <div>
        <h3>{error}</h3>
        <img src={iconTrash} width={240} />
    </div>
}
 
export default PokemonError;