import * as actionTypes from '../actions/actionTypes';
import moment from 'moment'

const {
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  SET_START_DATE,
  SET_END_DATE
} = actionTypes;

const initialState = {
  text: '',
  sortBy: 'date', 
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

const setTextFilter = (state, action) => {
  return {
    ...state,
    text: action.text
  };
};

const sortByAmount = (state, action) => {
  return {
    ...state,
    sortBy: 'amount'
  };
};

const sortByDate = (state, action) => {
  return {
    ...state,
    sortBy: 'date'
  };
};

const setStartDate = (state, action) => {
  return {
    ...state,
    startDate: action.startDate
  };
};

const setEndDate = (state, action) => {
  return {
    ...state,
    endDate: action.endDate
  };
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return setTextFilter(state, action);
    case SORT_BY_AMOUNT:
      return sortByAmount(state, action);
    case SORT_BY_DATE:
      return sortByDate(state, action);
    case SET_START_DATE:
      return setStartDate(state, action);
    case SET_END_DATE:
      return setEndDate(state, action);
    default:
      return state;
  }
};

export default filtersReducer;
