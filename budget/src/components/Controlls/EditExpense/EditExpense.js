import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../../ExpenseForm/ExpenseForm';
import * as actions from '../../../store/actions/index'

const EditExpensePage = props => {
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(actions.editExpense(props.expense.id, expense));
          props.history.push('/')
        }}
      />
        <button onClick={() => {
          props.dispatch(actions.removeExpense({ id: props.expense.id }));
          props.history.push('/')
        }}> Remove </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
