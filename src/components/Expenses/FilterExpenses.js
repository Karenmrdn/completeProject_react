import React, { useState } from "react";
import "./FilterExpenses.css";

function FilterExpenses() {
  const [pickedYear, setPickedYear] = useState("");

  const onSelectChange = (e) => {
    setPickedYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="years">Filter by a year</label>
        <select onChange={onSelectChange} name="years" id="years">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default FilterExpenses;
