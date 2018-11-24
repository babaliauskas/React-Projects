import * as actionTypes from '../actions/actionTypes';

const { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_EXPENSES } = actionTypes;
const initialState = [];

const addExpense = (state, action) => {
  return [...state, action.expense];
};

const removeExpense = (state, action) => {
  return state.filter(({ id }) => id !== action.id);
};

const editExpense = (state, action) => {
  return state.map(expense => {
    if (expense.id === action.id) {
      return {
        ...expense,
        ...action.updates
      };
    } else {
      return expense;
    }
  });
};

const setExpenses = (state, action) => {
  return action.expenses;
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return addExpense(state, action);
    case REMOVE_EXPENSE:
      return removeExpense(state, action);
    case EDIT_EXPENSE:
      return editExpense(state, action);
    case SET_EXPENSES:
      return setExpenses(state, action);
    default:
      return state;
  }
};

export default expenseReducer;
