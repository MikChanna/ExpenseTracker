import './expenseItem.css'
import ExpenseDate from './expenseDate'

function expenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_price">${props.amount}</div>
            </div>
        </div>
    )
}

export default expenseItem