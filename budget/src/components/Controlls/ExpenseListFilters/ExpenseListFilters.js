import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import * as actions from '../../../store/actions/index';

const {
  sortByAmount,
  sortByDate,
  setTextFilter,
  setStartDate,
  setEndDate
} = actions;

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.onSetStartDate(startDate);
    this.props.onSetEndDate(endDate);
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.props.onsetTextFilter}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.props.onSortBy}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

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
        dispatch(sortByDate(e.target.value));
      } else if (e.target.value === 'amount') {
        dispatch(sortByAmount(e.target.value));
      }
    },
    onSetStartDate: startDate => dispatch(setStartDate(startDate)),
    onSetEndDate: endDate => dispatch(setEndDate(endDate))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
