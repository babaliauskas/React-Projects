import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../../ExpenseForm/ExpenseForm';
import * as actions from '../../../store/actions/index';

const AddExpense = props => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={expense => {
      console.log(expense)
      props.dispatch(actions.addExpense(expense));
      props.history.push('/')
    }} />
  </div>
);

export default connect()(AddExpense);
