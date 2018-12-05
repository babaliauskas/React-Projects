import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form'
import eventReducer from '../../features/event/eventReducer'
import modalsReducer from '../../features/Modals/modalReducer'
import authReducer from '../../features/auth/authReducer'
import asyncReducer from '../../features/async/asyncReducer'

const rootReducer = combineReducers({
  form: FormReducer,
  events: eventReducer,
  modals: modalsReducer,
  auth: authReducer,
  async: asyncReducer
});

export default rootReducer;
