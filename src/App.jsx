import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JokeList from "./Component/JokeList";

function App() {
  return (
    <div>
<<<<<<< HEAD
      <button onClick={getJoke}> get jokes </button>
      <br/>
      {joke}
=======
      <Router>
        <Switch>
          <Route exact path="/">
            <JokeList />
          </Route>
        </Switch>
      </Router>
>>>>>>> 5317c8e660101af9f878d8e0315392b729a5ede1
    </div>
  );
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 5317c8e660101af9f878d8e0315392b729a5ede1
