import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseData = (expense) => {
    const expenseObj = {
      ...expense,
      id: Math.random(),
    };
    props.onAddExpense(expenseObj);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
}

export default NewExpense;
