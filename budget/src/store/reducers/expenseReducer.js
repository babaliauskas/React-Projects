
// const initialState = {
//   expense: [
//     {
//       id: 'asdf',
//       description: 'January Rent',
//       note: 'This was tje final payment',
//       amount: 54500,
//       createdAt: 0
//     }
//   ]}

const initialState = [];

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id); // destructured expense.id
    case 'EDIT_EXPENSE':
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
