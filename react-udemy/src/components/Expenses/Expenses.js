import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	// Filter the expenses with the year

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

				{/* To avoid multiple expense items here. We can use Array.map in jsx  */}

				{/* after filtering if there are no items in the year we can provide the condition statements to print the statement */}

				{/* {filteredExpenses.length==0 ? <p>No expenses found</p> : filteredExpenses.map((expense) => (
					<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> ))}*/}
				{/* or */}
				{/* {filteredExpenses.length ==0 && <p>No expenses found</p>} 
				{filteredExpenses.length>0 && filteredExpenses.map((expense) => (
					<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> ))}					 */}
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
