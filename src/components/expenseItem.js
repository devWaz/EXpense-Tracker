const ExpenseItem = ({expense , index , removeExpense}) => {
    let date = new Date(expense.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const handleRemove = (i) => {
        removeExpense(i)
    }


    return ( 
        <div>
            <button onClick={handleRemove(index)}>❌</button>
            <div className="desc">{expense.desc}</div>
            <div className="price">${expense.price}</div>
            <div className="desc">{day + "/" + month + "/" + year}</div>
        </div> 
    );
}
 
export default ExpenseItem;