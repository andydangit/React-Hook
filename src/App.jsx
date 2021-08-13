import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PageNotFound from './pages/PageNotFound'

function App() {
  return(
    <>
    <div style ={{width: 100  + "vw", height: 80, backgroundColor: "lightblue"}}> </div>
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/> 
      <Route path="/projects" exact component={Projects}/> 
      <Route path="/about" exact component={About}/> 
      <Route path="*" exact component={PageNotFound}/> 
    </Switch>
  </Router>
  </>
  );
}

export default App;
