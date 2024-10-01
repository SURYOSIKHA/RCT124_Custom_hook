import React from "react";
import useToggleItems from "./useToggleItems";

const App = () => {
  const [state, toggleState] = useToggleItems(["A", "B", "C", "D"], 1);

  return (
    <div>
      <h1>Current Item: {state}</h1>
      <button onClick={toggleState}>Toggle Item</button>
    </div>
  );
};

export default App;
