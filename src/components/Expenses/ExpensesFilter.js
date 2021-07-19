import React from "react";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="years">Filter by a year</label>
        <select
          onChange={dropdownChangeHandler}
          value={props.selectedYear}
          name="years"
          id="years"
        >
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
