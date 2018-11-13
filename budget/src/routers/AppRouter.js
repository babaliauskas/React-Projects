import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardPage from '../components/Dashboard/ExpenseDashboard'
import AddExpensePage from '../components/Controlls/AddExpense/AddExpense'
import EditExpensePage from '../components/Controlls/EditExpense/EditExpense'
import HelpPage from '../components/Help/Help'
import ErrorPage from '../components/Error/Error'
import Header from '../components/Header/Header'

const AppRouter = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" exact component={DashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={ErrorPage} />
    </Switch>
  </div>
);

export default AppRouter;
