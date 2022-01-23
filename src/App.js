import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "T-shirt",
    amount: 45,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 320,
    date: new Date(2020, 1, 12),
  },
  {
    id: "e5",
    title: "iphone x",
    amount: 350,
    date: new Date(2019, 5, 12),
  },
  {
    id: "e6",
    title: "Laptop",
    amount: 999,
    date: new Date(2019, 1, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpeseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpeseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
