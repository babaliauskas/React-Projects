import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

const {sortByAmount, sortByDate, setTextFilter} = actions

const ExpenseListFilters = props => {
  return (
    <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={props.onsetTextFilter}
    />
      <select
        value={props.filters.sortBy}
        onChange={props.onSortBy}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onsetTextFilter: e => dispatch(setTextFilter(e.target.value)),
    onSortBy: e => {
      if (e.target.value === 'date') {
        dispatch(sortByDate(e.target.value))
      } else if ( e.target.value === 'amount') {
        dispatch(sortByAmount(e.target.value))
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
