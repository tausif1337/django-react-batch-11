import { useDispatch, useSelector} from "react-redux";
import { decrement, increment, changeName } from "./features/counter/counterSlice";
import Greeting from "./components/Greeting";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.counter.name);

  return (
    <div className="min-h-svh flex flex-col justify-center items-center ">
      <h1 className="text-3xl">Value: {count}</h1>
      <h1 className="text-3xl">Name: {name}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-blue-500 rounded-md text-white"
      >
        Increment Button
      </button>

      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 bg-blue-500 rounded-md text-white"
      >
        Decrement Button
      </button>

       <button
        onClick={() => dispatch(changeName())}
        className="px-4 py-2 bg-blue-500 rounded-md text-white"
      >
        change Name
      </button>
    </div>
  );
}
export default App;
