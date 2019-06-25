import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Home from "./Home";

import BeerCardBig from "./BeerCardBig";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={BeerCardBig} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
