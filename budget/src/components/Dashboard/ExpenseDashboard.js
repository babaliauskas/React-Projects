import React from 'react';
import { connect } from 'react-redux';

import ExpenseList from '../ExpenseList/EpenseList';
import ExpenseListFilters from '../Controlls/ExpenseListFilters/ExpenseListFilters';
import ExpensesSummary from '../ExpenseSummary/ExpenseSummary';
import * as actions from '../../store/actions/index';

class ExpenseDashboard extends React.Component {
  state = {
    loading: false
  };
  componentDidMount() {
    this.props.onStartSetExpenses();
    this.setState({ loading: true });
  }
  render() {
    let display = <p>Loading...</p>;
    if (this.state.loading) {
      display = <ExpenseList />;
    }
    return (
      <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        {display}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onStartSetExpenses: () => dispatch(actions.startSetExpense())
});

export default connect(
  null,
  mapDispatchToProps
)(ExpenseDashboard);
