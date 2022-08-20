import { useState , useEffect , useRef } from "react";


const ExpenseForm = () => {

    const [expense , setExpense] = useState([]);
    const desc = useRef(null)

    return ( 
        <form className="expense-form">
            <div className="form-container">
                <input type="text" name="desc" id="desc" placeholder="Description.." ref={desc}/>
                <input type="number" name="price" id="price" placeholder="Price"/>
                <input type="date" name="date" id="date" />
                <input type="submit" value="ADD" />
            </div>
        </form>
     );
}
 
export default ExpenseForm;