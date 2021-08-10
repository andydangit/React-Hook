import { useState } from 'react';

import './App.css';

function App() {

  // const [count, setCount] = useState(() => {
  //   console.log("run function")
  //   return 4
  // });

  const [count, setCount] = useState (4);
  const [theme, setTheme] = useState ('blue');

  function decrementCount () {
    setCount ( prevCount => prevCount - 1)
  };

  function incrementCount () {
    setCount ( prevCount => prevCount + 1)
  };


  return (
<>
    <button onClick = {decrementCount}> - </button>
    <span> {count} </span>
    <span> {theme} </span>
    <button onClick = {incrementCount} > + </button>
</>
  );
}

export default App;
