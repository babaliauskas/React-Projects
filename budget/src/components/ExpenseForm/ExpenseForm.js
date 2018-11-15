import React from 'react';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

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
  if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  render() {
    return (
      <div>
        <form action="">
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
