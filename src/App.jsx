import React, {useState} from 'react'
// import {BrowserRouter as Router, Switch, Route,  Link, } from 'react-router-dom'
import Axios from 'axios';



function App() {

  // const url = `https://official-joke-api.appspot.com/random_joke`;

  const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
      setJoke(response.data.setup + ".... " + response.data.punchline)
      
      }
    );
  }


  return (
    <div>
      <button onClick={getJoke}> get joke </button>
      <br/>
      {joke}
    </div>
  )
}

export default App

