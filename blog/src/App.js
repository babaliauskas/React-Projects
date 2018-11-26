import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Edit from './components/Edit'
import './App.css';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/edit' component={Edit} /> 
        <Route path='/' exact component={Dashboard} />
      </Switch>
    )
    return (
      <div className="App">
          {routes}
      </div>
    );
  }
}

export default App;
