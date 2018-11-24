import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../../ExpenseForm/ExpenseForm';
import * as actions from '../../../store/actions/index';

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.onEditExpense(props.expense.id, expense);
          props.history.push('/');
        }}
      />
      <button
        onClick={() => {
          props.onStartRemoveExpense({ id: props.expense.id });
          props.history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  onEditExpense: (id, expense) => dispatch(actions.editExpense(id, expense)),
  onStartRemoveExpense: data => dispatch(actions.startRemoveExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
