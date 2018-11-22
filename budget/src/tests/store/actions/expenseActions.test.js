import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../store/actions/index';
import expenses from '../../fixtures/expenses';
import database from '../../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

const { addExpense, editExpense, removeExpense, startAddExpense } = actions;

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('editExpense', { note: 'new note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'editExpense',
    updates: {
      note: 'new note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', done => {
  const store = createMockStore({});
  const expensesData = {
    description: 'Mouse',
    amount: '3000',
    note: 'Better',
    createdAt: 1000
  };

  store
    .dispatch(startAddExpense(expensesData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expensesData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
    });
  done();
});

test('should add expense with defaults to database and store', () => {});

// test('should setup add expense action object with default values', () => {
//   const action = startAddExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });
