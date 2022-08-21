import ExpenseItem from "./expenseItem";

const ExpenseLog = ({expense , setExpense}) => {

    const removeExpense = (i) => {
        let temp = expense.filter((v , index) => index !== i)
        setExpense(temp)
    }

    const sortByDate = (a , b) => {
        return a.date - b.date
    }

    return ( 
        <div className="history">
            <p>Expense History</p>
            <div className="expense-log">
            {
                expense.sort(sortByDate).map((value , index) => (
                    <ExpenseItem 
                    key={index} 
                    expense={value} 
                    index={index}
                    removeExpense={removeExpense} />
                ))
            }
            </div>
        </div>
     );
}
 
export default ExpenseLog;