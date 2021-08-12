import React, { useState, useEffect} from "react";

const App = () => {

const [count, setCount] = useState(0);

// const increment = () => {
//   setCount (count + 1)
// }

  return (
    <div className="App">
      {count}
      <button onClick = {() => setCount(count+1)}> Increment </button>
      <button onClick={() => setCount(count -1)}>Decrement</button> 
    </div>
  );
}

export default App;
