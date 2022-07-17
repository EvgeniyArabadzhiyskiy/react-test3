import { useEffect, useReducer } from "react";
import { Link } from "../../App.styled";
import { useParams } from "react-router-dom";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      throw new Error("You have Error");
  }
}

// function useLocalStorage(key, initialValue ) {
//   const [state, setState] = useState(() =>  JSON.parse(window.localStorage.getItem(key))) ?? initialValue

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state))
//   },[state, key])

//   return [state, setState]

// }

function init() {
  return { count: JSON.parse(window.localStorage.getItem("counter")) };
}

const Counter = () => {

  const {counter}  = useParams();
  // console.log("Counter ", counter);
  
  const [stateCounter, dispatch] = useReducer(countReducer, { count: 0 }, init);

  useEffect(() => {
    window.localStorage.setItem("counter", JSON.stringify(stateCounter.count));
  }, [stateCounter.count]);

  return (
    <div>
      <Link to="/about">Go Back</Link>
      <Link to="/">Home</Link>
      
      <h1>CLASS: {counter}</h1>

      <h2>{stateCounter.count ?? 0}</h2>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        Увеличить
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", payload: 10 })}
      >
        Уменьшить
      </button>
    </div>
  );
};

export default Counter;
