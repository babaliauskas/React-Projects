import {
  UPDATE_EVENT,
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENT
} from './eventConstants';
import {
  asyncActionsStart,
  asyncActionsFinish,
  asyncActionsError
} from '../async/asyncActions';
import { fetchSampleData } from '../../app/data/mockApi';

export const fetchEvents = events => ({
  type: FETCH_EVENT,
  payload: events
});

export const createEvent = event => ({
  type: CREATE_EVENT,
  payload: {
    event
  }
});

export const updateEvent = event => ({
  type: UPDATE_EVENT,
  payload: {
    event
  }
});

export const deleteEvent = eventId => ({
  type: DELETE_EVENT,
  payload: {
    eventId
  }
});

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionsStart());
      let events = await fetchSampleData();
      dispatch(fetchEvents(events));
      dispatch(asyncActionsFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionsError());
    }
  };
};
