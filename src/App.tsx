import "./App.css";
import { useCountStore } from "./store";

function App() {
  const { count, dec, inc, reset } = useCountStore();

  return (
    <>
      <div>
        <button onClick={inc}>inc</button>
        <h1>{count}</h1>
        <button onClick={dec}>dec</button>
      </div>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;
