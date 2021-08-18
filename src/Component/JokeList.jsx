import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import JokeCard from './JokeCard';

function JokeList() {
    const url = "https://official-joke-api.appspot.com/random_joke"

    const [joke, setJoke] = useState([]);

    useEffect(() => { 
  const getJoke = async() => {
      const response = await Axios.get(`${url}`);
      setJoke(response.data)
  };
getJoke();
}, []);
 





    return (
        <div>
           {joke.map((joke) => {
               return <JokeCard joke={joke} /> 
           })}
        </div>
    )
}

export default JokeList
