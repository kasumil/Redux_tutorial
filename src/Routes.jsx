import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CounterContainer from './containers/CounterContainer';

export default function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={CounterContainer}/>
      </Switch>
    </Router>
  )
}

