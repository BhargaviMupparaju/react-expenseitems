import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
const NewExpense = (props) => {
	const [IsEditing, setIsEditing] = useState(false);

	const handleAddButton = () => {
		setIsEditing(true);
	};

	const handleCancelButton = () => {
		setIsEditing(false);
	};
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		console.log(expenseData);
		setIsEditing(false);
		props.onAddExpenseData(expenseData);
	};
	return (
		<div className="new-expense">
			{!IsEditing && <button onClick={handleAddButton}>Add New Expense </button>}
			{IsEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={handleCancelButton} />}
		</div>
	);
};

export default NewExpense;
