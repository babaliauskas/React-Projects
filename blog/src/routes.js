import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import CreatePost from './components/Controlls/Create/Create';

export default (
  <Switch>
    <Route path="/edit/:id" component={CreatePost} />
    <Route path="/create" component={CreatePost} />
    <Route path="/" exact component={Dashboard} />
  </Switch>
);
