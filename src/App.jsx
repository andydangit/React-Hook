import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return(
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/> 
      <Route path="/projects" exact component={Projects}/> 
      <Route path="/about" exact component={About}/> 
      <Route path="*" exact component={About}/> 
    </Switch>
  </Router>
  );
}

export default App;
