import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Shows from './components/content/Shows';
import Movies from './components/content/Movies';
import MyList from './components/content/MyList';
import Latest from './components/content/Latest';

export default (
    <Switch >
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/shows' component={Shows} />
        <Route exact path='/movies' component={Movies} />
        <Route exact path='/my-list' component={MyList} />
        <Route exact path='/latest' component={Latest} />
    </Switch>
)