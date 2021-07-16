import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

function App() {
  const data = [
    { id: 1, title: "Laptop", price: 900, date: new Date(2019, 1, 11) },
    { id: 2, title: "Smartphone", price: 400, date: new Date(2021, 2, 12) },
    { id: 3, title: "Headphones", price: 150, date: new Date(2022, 3, 13) },
    { id: 4, title: "Keyboard", price: 200, date: new Date(2021, 4, 14) },
    { id: 5, title: "TV", price: 600, date: new Date(2020, 5, 15) },
  ];
  const filterValue = null;

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={data} />
    </Card>
  );
}

export default App;
