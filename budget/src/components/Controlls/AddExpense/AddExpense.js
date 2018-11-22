import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../../ExpenseForm/ExpenseForm';
import * as actions from '../../../store/actions/index';

const AddExpense = props => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        props.onAddExpense(expense);
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  onAddExpense: expense => dispatch(actions.startAddExpense(expense))
});
export default connect(
  null,
  mapDispatchToProps
)(AddExpense);
