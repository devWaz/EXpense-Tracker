import { useRef } from "react";


const ExpenseForm = ({expense , setExpense}) => {
    
    const desc = useRef(null);
    const date = useRef(null);
    const price = useRef(null);

    const addExpense = (e) => {
        e.preventDefault();
        console.log(date.current.value.split("-"));
        let d = date.current.value;
        let newD = new Date(d[0], d[1], d[2]);

        setExpense([...expense , {
            desc : desc.current.value,
            price : price.current.value,
            date : newD.getTime()
        }]);

        desc.current.value = "";
        price.current.value = null;
        date.current.value = null;
    }


    return ( 
        <form className="expense-form" onSubmit={addExpense}>
            <div className="form-container">
                <input type="text" name="desc" id="desc" placeholder="Description.." ref={desc}/>
                <input type="number" name="price" id="price" placeholder="Price" ref={price}/>
                <input type="date" name="date" id="date" ref={date}/>
                <input type="submit" value="ADD" />
            </div>
        </form>
     );
}
 
export default ExpenseForm;