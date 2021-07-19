import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (expense) => {
    const expenseObj = {
      ...expense,
      id: Math.random(),
    };
    props.onAddExpense(expenseObj);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
    </div>
  );
}

export default NewExpense;
