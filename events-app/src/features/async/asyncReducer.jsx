import { createReducer } from '../../app/common/util/reducerUtil';
import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR
} from './asyncConstants';

const initialState = {
  loading: false
};

export const asyncActionStarted = (state, payload) => {
  return { ...state, loading: true };
};

export const asyncActionsFinished = (state, payload) => {
  return { ...state, loading: false };
};

export const asyncActionsError = (state, payload) => {
  return { ...state, loading: false };
};

export default createReducer(initialState, {
  [ASYNC_ACTION_START]: asyncActionStarted,
  [ASYNC_ACTION_FINISH]: asyncActionsFinished,
  [ASYNC_ACTION_ERROR]: asyncActionsError
});
