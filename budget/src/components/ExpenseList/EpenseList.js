import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem.js/ExpenseListItem';
import selectExpenses from '../../store/selectors/expensesSelector';

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
