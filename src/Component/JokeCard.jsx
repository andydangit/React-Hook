import React from 'react'

function JokeCard(props) {
    return (
        <div>
            {props.joke.setup}
            <div> 
            {props.joke.punchline}
            </div> 
            <br/>

        </div>
    )
}

export default JokeCard
