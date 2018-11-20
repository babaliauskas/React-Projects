import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  descriptionChangeHandler = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  noteChangeHandler = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  amountChangeHandler = e => {
    const amount = e.target.value;
    // only numbers with two digits after comma
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  submitFormHandler = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  // For SingleDatePicker
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.submitFormHandler}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.descriptionChangeHandler}
            autoFocus
          />

          <input
            type="text"
            placeholder="Amount"
            onChange={this.amountChangeHandler}
            value={this.state.amount}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            placeholder="Add a note for your expense (optional)"
            onChange={this.noteChangeHandler}
            value={this.state.note}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
