import React, { useState } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cv from './components/Cv';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cv">
          <Cv />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  )
}

export default App
