import {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_START
} from './asyncConstants';

export const asyncActionsStart = () => ({
  type: ASYNC_ACTION_START
});

export const asyncActionsFinish = () => ({
  type: ASYNC_ACTION_FINISH
});

export const asyncActionsError = () => ({
  type: ASYNC_ACTION_ERROR
});
