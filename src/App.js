import Navbar from "./components/navbar";
import Balance from "./components/balance";
import ExpenseForm from "./components/expenseform";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Balance/>
      <ExpenseForm/>
    </div>
  );
}

export default App;
