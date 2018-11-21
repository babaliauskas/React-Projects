import React from 'react'

import ExpenseList from '../ExpenseList/EpenseList'
import ExpenseListFilters from '../Controlls/ExpenseListFilters/ExpenseListFilters'
import ExpensesSummary from '../ExpenseSummary/ExpenseSummary'

const ExpenseDashboard = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboard