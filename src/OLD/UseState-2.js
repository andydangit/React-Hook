import React, { useState, useEffect} from "react";

const App = () => {

const [count, setCount] = useState(0);
const [secondCount, setSecondCount] = useState (1);

useEffect(() => {
  setCount ( count + 1); 
}, [secondCount]);

// const increment = () => {
//   setCount (count + 1)
// }

  return (
    <div className="App">
      {count} - {secondCount}
      <button onClick = { () => setSecondCount (secondCount + 1 )}> Increment Second</button>


      
      {/* <button onClick = {() => setCount(count+1)}> Increment </button>
      <button onClick={() => setCount(count -1)}>Decrement</button>  */}
    </div>
  );
}

export default App;
