import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JokeList from "./Component/JokeList";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <JokeList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
