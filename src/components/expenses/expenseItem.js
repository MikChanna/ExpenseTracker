import './expenseItem.css'
import Card from '../UI/card'
import ExpenseDate from './expenseDate'

const expenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default expenseItem
