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



function init() {
  return { count: JSON.parse(window.localStorage.getItem("counter")) };
}

function useActionIncrement() {
  const [stateCounter, dispatch] = useReducer(countReducer, { count: 0 }, init);

  return {
    stateCounter,
    increment: (value) => dispatch({ type: "increment", payload: value }),
    decrement: value => dispatch({ type: "decrement", payload: value })
  }
}

const Counter = () => {
  const { counter } = useParams();

  // const [stateCounter, dispatch] = useReducer(countReducer, { count: 0 }, init);

  const {stateCounter, increment, decrement} = useActionIncrement()   // Кастомный хук

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
        onClick={() => increment(1)}
      >
        Увеличить
      </button>
      <button
        type="button"
        onClick={() => decrement(5)}
      >
        Уменьшить
      </button>
    </div>
  );
};

export default Counter;
