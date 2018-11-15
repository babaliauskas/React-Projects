import React from 'react'

import ExpenseList from '../ExpenseList/EpenseList'
import ExpenseListFilters from '../Controlls/ExpenseListFilters/ExpenseListFilters'

const ExpenseDashboard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboard