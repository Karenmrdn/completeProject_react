import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ expenses }) {
  if (expenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses found for this year
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
