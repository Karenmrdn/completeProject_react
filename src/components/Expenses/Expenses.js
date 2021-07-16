import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import FilterExpenses from "./FilterExpenses";

function Expenses({ data }) {
  const [filteringYear, setFilteringYear] = useState(null);

  return (
    <Card className="expenses">
      <div>
        <FilterExpenses />
      </div>
      <ExpenseItem
        title={data[0].title}
        price={data[0].price}
        date={data[0].date}
      />
      <ExpenseItem
        title={data[1].title}
        price={data[1].price}
        date={data[1].date}
      />
      <ExpenseItem
        title={data[2].title}
        price={data[2].price}
        date={data[2].date}
      />
      <ExpenseItem
        title={data[3].title}
        price={data[3].price}
        date={data[3].date}
      />
      <ExpenseItem
        title={data[4].title}
        price={data[4].price}
        date={data[4].date}
      />
    </Card>
  );
}

export default Expenses;
