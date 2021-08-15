import React from 'react'
// import {BrowserRouter as Router, Switch, Route,  Link, } from 'react-router-dom'
import Axios from 'axios';



function App() {

  // const url = `https://official-joke-api.appspot.com/random_joke`;

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
      console.log(response);
      }
    );
  }


  return (
    <div>
      <button onClick={getJoke}> get joke </button>
    </div>
  )
}

export default App

