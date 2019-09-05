import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Movie from './components/movies/movie/Movie';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/movie/:id' component={Movie} />
    </Switch>
)