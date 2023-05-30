import "./ExpenseItems.css";

function Expenseitems(props) {
	const expensedate = new Date(2023, 5, 30);
	const expensetitle = "Car Insurance";
	const expenseAmount = 290.64;
	return (
		<div classname="expense-item">
			<div> {expensedate.toISOString()}</div>
			<div classname="expense-item__description">
				<h2> {expensetitle}</h2>
				<div classname="expense-item__price">${expenseAmount}</div>
			</div>
		</div>
	);
}

export default Expenseitems;
