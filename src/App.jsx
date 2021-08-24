import React, {useState} from 'react'
// import {BrowserRouter as Router, Switch, Route,  Link, } from 'react-router-dom'
import Axios from 'axios';



function App() {

  // const url = `https://official-joke-api.appspot.com/random_joke`;

  const [joke, setJoke] = useState("");

  // Axios
  // const getJoke = () => {
  //   Axios.get("https://official-joke-api.appspot.com/random_joke").then(
  //     (response) => {
  //     setJoke(response.data.setup + ".... " + response.data.punchline)
      
  //     }
  //   );
  // }


  // using fetch
  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke").then(
      (response) => response.json()).then((data) => {
        setJoke(data.setup + ".... " + data.punchline)
      });
  }

  return (
    <div>
      <button onClick={getJoke}> get jokes </button>
      <br/>
      {joke}
    </div>
  )
}

export default App
