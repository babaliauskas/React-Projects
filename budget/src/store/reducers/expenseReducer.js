import * as actionTypes from '../actions/actionTypes';

const { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } = actionTypes;
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

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return addExpense(state, action);
    case REMOVE_EXPENSE:
      return removeExpense(state, action);
    case EDIT_EXPENSE:
      return editExpense(state, action);
    default:
      return state;
  }
};

// const store = createStore(combineReducers({ filtersReducer, expenseReducer }));

// console.log(store.getState())
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenseReducer, state.filtersReducer)
//   console.log(visibleExpenses);
// });

// store.dispatch(setTextFilter('e'));
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

// const expenseOne = store.dispatch(
//   addExpense({ description: 'rent', amount: 100, createdAt: -1000 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: 'coffee', amount: 300, createdAt: -21000 })
// );

// store.dispatch(setTextFilter('rent'));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 700 }));

export default expenseReducer;
