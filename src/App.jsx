// import {  useState } from "react";
// import { useForm } from "react-hook-form";

// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

import Colorpicker from "./ColorPicker/ColorPicker";
import colorPickerOptions from './ColorPicker/colorPickerOptions.json'

// import Friends from "./components/Friends/Friends";
import Counter from "./components/Counter/Counter";

// import Form from "./components/Form/Form";
// import PokemonForm from "./components/PokemonForm/PokemonForm";
// import InfoPokemon from "./components/PokemonView/InfoPokemon";
// import UserMenu from "./components/UserMenu/UserMenu";
// import PokemonInfo from "./components/ViewPokemon/PokemonInfo";

// ======================= Маршрутизация ========================

import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { NotFound } from "./pages/NotFound";
import { Container, Header, Logo, Link } from "./App.styled";
import { ProductDetails } from "./pages/ProdactDetails";
import Statistics from "./pages/Statistics";

const App = () => {

  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />

       
        <Route path="/about" element={<About />}  >
            <Route path="color-picker" element={<Colorpicker options={colorPickerOptions}/>} />
            <Route path="counter" element={<Counter />} />
        </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        {/* <Route path="/products/statistics" element={<Statistics />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

     
    </Container>
  );
};
export default App;

// const App = () => {
//   const [pokemonName, setPokemonName] = useState("")

//   const submitForm = (pokemonName) => {
//     setPokemonName(pokemonName)
//   };
//   return ( <div>
//     {/* <Counter /> */}
//     {/* <Friends /> */}
//     {/* <UserMenu /> */}
//     {/* <Colorpicker options={colorPickerOptions} /> */}

//     {/* <PokemonForm onFormSubmit={submitForm} /> */}
//     {/* <InfoPokemon pokemonName={pokemonName} /> */}
//     {/* <ToastContainer autoClose={2000} /> */}
//   </div> );
// }

// export default App;

//=================================================================================================

// const App = () => {
//   const [form, setForm] = useState({});

//   useEffect(() => {
//     console.log("IN useEffect", form);
//   }, [form]);

//   return (
//     <div>
//       <HookForm onSubmitForm={setForm} />
//     </div>
//   );
// };

// const HookForm = ({ onSubmitForm }) => {
//   const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful }} = useForm();

//   const onSubmitHookForm = (data, e) => {
//     onSubmitForm(data);
//   };

//   const onError = (err, e) => {
//     if (err.name) {
//       err.name.message = "NAME ERROR";
//     }

//     if (err.number) {
//       err.number.message = "NUMBER ERROR";
//     }
//   };

//   useEffect(() => {
//     isSubmitSuccessful && reset();                 // reset Form
//   }, [isSubmitSuccessful, reset]);

//   const change = (e) => {
//     // console.log(e.target.value)           // OnChange
//   };

//   return (
//     <div>
//       <h1>React Hook Form</h1>
//       <form onSubmit={handleSubmit(onSubmitHookForm, onError)}>
//         <input
//           placeholder="First Name"
//           {...register("name", {
//             onChange: change,
//             required: true,
//             minLength: 4,
//           })}
//         />

//         <input {...register("number", { required: true })} />

//         {errors.name && (<span style={{ color: "red" }}>{errors.name.message}</span>)}
//         {errors.number && (<span style={{ color: "red" }}>{errors.number.message}</span>)}

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

// class App extends Component {
//   state = {
//     pokemonName: "",
//   };

//   formSubmit = (pokemonName) => {
//     this.setState({ pokemonName });
//   };

//   render() {
//     return (
//       <div>
//         <Form onFormSubmit={this.formSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }
