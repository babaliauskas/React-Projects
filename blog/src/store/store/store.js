import reducer from '../reducers/postReducer'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store