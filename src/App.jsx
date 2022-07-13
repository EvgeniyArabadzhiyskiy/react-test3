// import {  useState } from "react";
// import { useForm } from "react-hook-form";

// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// import Colorpicker from "./ColorPicker/ColorPicker";
// import colorPickerOptions from "./ColorPicker/colorPickerOptions.json";

// import Friends from "./components/Friends/Friends";
// import Counter from "./components/Counter/Counter";

// import Form from "./components/Form/Form";
// import PokemonForm from "./components/PokemonForm/PokemonForm";
// import InfoPokemon from "./components/PokemonView/InfoPokemon";
// import UserMenu from "./components/UserMenu/UserMenu";
// import PokemonInfo from "./components/ViewPokemon/PokemonInfo";

// ======================= Маршрутизация ========================

// import { lazy } from "react";
// import { Route, Routes } from "react-router-dom";
// import { SharedLayout } from "./components/SharedLayout/SharedLayout";
// import { Container, Header, Logo, Link } from "./App.styled";

// const createAsyncComponent = (path) => lazy(() => import(path));

// import About from "./pages/About";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import NotFound from "./pages/NotFound";
// import ProductDetails from "./pages/ProdactDetails";
// import Statistics from "./pages/Statistics";
// import PagePokemonInfo from "./pages/PagePokemonInfo";


// const Home = createAsyncComponent('./pages/Home')
// const About = createAsyncComponent('./pages/About');
// const Products = createAsyncComponent('./pages/Products')
// const ProductDetails = createAsyncComponent('./pages/ProdactDetails')
// const Statistics = createAsyncComponent('./pages/Statistics')
// const PagePokemonInfo = createAsyncComponent('./pages/PagePokemonInfo')
// const NotFound = createAsyncComponent('./pages/NotFound')


// const App = () => {
//   return (
    
   
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>

//           <Route index element={<Home />} />

//           <Route path="about" element={<About />}>
//             {/* <Route path="color-picker" element={<Colorpicker options={colorPickerOptions} />}/> */}
//             {/* <Route path="counter" element={<Counter />} /> */}
//           </Route>
//           {/* <Route path="/about/pokemons" element={<PagePokemonInfo />} /> */}

//           <Route path="products" element={<Products />} />
//           <Route path="products/:id" element={<ProductDetails />} />
//           {/* <Route path="products/stats/:stat" element={<Statistics />} /> */}
//           {/* <Route path="products/counter/:counter" element={<Counter />} /> */}

//           <Route path="*" element={<NotFound />} />

//         </Route>
        
//       </Routes>
    
//   );
// };
// export default App;


// ===============================Маршрутизация разделение кода

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const createAsyncComponent = (path) => lazy(() => import(path));

// const About = createAsyncComponent("./pages/About.jsx");
// const Home = createAsyncComponent("./pages/Home.jsx");
// const ProductDetails = createAsyncComponent("./pages/ProdactDetails.jsx");
const Products = createAsyncComponent("./pages/Products");
const NotFound = createAsyncComponent("./pages/NotFound")

// const Mission = createAsyncComponent("./components/Mission.jsx");
// const Team = createAsyncComponent("./components/Team.jsx");
// const Reviews = createAsyncComponent("./components/Reviews.jsx");

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
        <Route path="products" element={<Products />} />
        {/* <Route path="products/:id" element={<ProductDetails />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};













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
