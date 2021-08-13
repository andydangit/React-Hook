import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PageNotFound from './pages/PageNotFound'


function App() {
  return(
    <>
      <Router>
    <div style ={{width: 100  + "vw", height: 80, backgroundColor: "lightblue"}}> 
    <Link to="/"> Home </Link>
    <Link to="/projects"> Projects </Link>
    <Link to="/about"> About </Link>
    </div>

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
