import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

const INITIAL_EXPENSES = [
  { id: 1, title: "Laptop", price: 900, date: new Date(2019, 1, 11) },
  { id: 2, title: "Smartphone", price: 400, date: new Date(2021, 2, 12) },
  { id: 3, title: "Headphones", price: 150, date: new Date(2022, 3, 13) },
  { id: 4, title: "Keyboard", price: 200, date: new Date(2021, 4, 14) },
  { id: 5, title: "TV", price: 600, date: new Date(2020, 5, 15) },
  { id: 6, title: "Mouse", price: 50, date: new Date(2021, 0, 14) },
  { id: 7, title: "Monitor", price: 350, date: new Date(2021, 11, 14) },
  { id: 8, title: "Car", price: 4000, date: new Date(2020, 1, 15) },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  /* !!! If we update state, depending on a prev state,
  we should use special function form in state updating func */
  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]); // ERROR
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </Card>
  );
}

export default App;
