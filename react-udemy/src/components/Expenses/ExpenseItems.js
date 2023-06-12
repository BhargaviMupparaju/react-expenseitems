import React, { useState } from "react";

import "./ExpenseItems.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItems = (props) => {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle("Updated");
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Update</button>
		</Card>
	);
};

export default ExpenseItems;
