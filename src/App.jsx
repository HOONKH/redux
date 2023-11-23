import { useDispatch, useSelector } from "react-redux";
import {
  asyncUpFetch,
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./countSlice";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const { count } = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-300 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(+e.target.value)}
      ></input>
      <div className="gap-8 flex text-2xl mt-4">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(input))}>
          incrementByAmount
        </button>
        <button onClick={() => dispatch(decrementByAmount(input))}>
          decrementByAmount
        </button>
        <button onClick={() => dispatch(asyncUpFetch())}>asyncUpFetch</button>
      </div>
    </div>
  );
};
export default App;
