import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import expenseReducer from './store/reducers/expenseReducer';
import filterReducer from './store/reducers/filterReducer';
import { addExpense } from './store/actions/expenseActions';
import { setTextFilter } from './store/actions/filterActions';
import getVisibleExpenses from './store/selectors/expensesSelector';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  expenses: expenseReducer,
  filters: filterReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(addExpense({ description: 'Water bill', amount: 100 }));
store.dispatch(addExpense({ description: 'Waterr bill', amount: 200 }));
store.dispatch(addExpense({ description: 'food bill', amount: 1200 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(setTextFilter(''));




const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
