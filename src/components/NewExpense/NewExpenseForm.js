import React, { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   /* We can use this syntax to set every value using one 'useState',
  //   but then it will be inconvenient to set values in handlers */
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: null,
  //     enteredPrice: null,
  //     enteredDate: null,
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expense = {
      title: enteredTitle,
      price: enteredPrice,
      date: enteredDate,
    };

    props.onSaveExpenseData(expense);

    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
            id="title"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Price</label>
          <input
            onChange={priceChangeHandler}
            value={enteredPrice}
            type="number"
            id="price"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
