import React from "react";
import Button from "../UI/Button";
import ElementItem from "./ElementItem";

import classes from "./ElementsList.module.css";

const ElementsList = () => {
  return (
    <div className={classes.transactions_list}>
      <div className={classes.header}>
        <h3>Filter by Year</h3>
        <div className={classes.header__selects}>
          <select name="type" id="type">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>

          <select name="type" id="type">
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>

      <ElementItem />

      <div className={classes.footer}>
        <Button text="Delete All" />
      </div>
    </div>
  );
};

export default ElementsList;
