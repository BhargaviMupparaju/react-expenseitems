import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
	const [changedTitle, setChangedTitle] = useState("");

	const [changedDate, setChangedDate] = useState("");

	const [changedAmount, setChangedAmount] = useState("");

	const titleChangeHandler = (event) => {
		setChangedTitle(event.target.value);
		console.log(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setChangedDate(event.target.value);
		console.log(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setChangedAmount(event.target.value);
		console.log(event.target.value);
	};

	const handleSubmitt = (event) => {
		event.preventDefault();

		const expenseData = {
			title: changedTitle,
			date: new Date(changedDate),
			amount: +changedAmount,
		};

		props.onSaveExpenseData(expenseData);
		setChangedTitle("");
		setChangedAmount("");
		setChangedDate("");
	};

	return (
		<form onSubmit={handleSubmitt}>
			<div className="new-expense__controls">
				<div className="new-expense__controls">
					<label>Title</label>
					<input type="text" value={changedTitle} onChange={titleChangeHandler}></input>
				</div>
				<div className="new-expense__controls">
					<label>Date</label>
					<input type="date" min="2019-01-01" max="2023-06-01" value={changedDate} onChange={dateChangeHandler}></input>
				</div>
				<div className="new-expense__controls">
					<label>Amount</label>
					<input type="number" min="0.01" step="0.01" value={changedAmount} onChange={amountChangeHandler}></input>
				</div>
			</div>

			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
