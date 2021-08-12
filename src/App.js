import React, { useState, useEffect} from "react";

const App = () => {

const [count, setCount] = useState(0);

const increment = () => {
  setCount (count + 1)
}

  return (
    <div className="App">
      {count}
      <button onClick = {increment}> Increment </button>
    </div>
  );
}

export default App;
