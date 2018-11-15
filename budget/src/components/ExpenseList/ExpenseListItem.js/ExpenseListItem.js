import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(actions.removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
