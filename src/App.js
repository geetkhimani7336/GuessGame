import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import TotalScore from "./TotalScore"
import Working from "./Working.js"
import FrontPagee from "./FrontPagee.js"
import HowPlay from './HowPlay';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <FrontPagee />
          </Route>
          <Route exact path="/process">
            <Working />
          </Route>
          <Route exact path="/score">
            <TotalScore />
          </Route>
          <Route exact path="/playhow">
            <HowPlay />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
