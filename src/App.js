import Navbar from "./components/navbar";
import Balance from "./components/balance";
import ExpenseForm from "./components/expenseform";
import { useState , useEffect } from "react";
import ExpenseLog from "./components/expenseLog";

function App() {
  const [expense , setExpense] = useState([]);
  const [balance , setBalance] = useState(0);
 
  useEffect(() => {
    let temp = 0;
    for(let i = 0; i < expense.length; i++) {
      temp += parseInt(expense[i].price)
    }

    setBalance(temp)
} , [expense])

  return (
    <div className="App">
      <Navbar/>
      <Balance balance={balance} />
      <ExpenseForm expense={expense} setExpense={setExpense}/>
      <ExpenseLog expense={expense} setExpense={setExpense}/>
    </div>
  );
}

export default App;
