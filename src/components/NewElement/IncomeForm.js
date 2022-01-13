import React from "react";

import Button from "../UI/Button";

import classes from "./AddNewElement.module.css";

const IncomeForm = () => {
  return (
    <div>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" placeholder="Title" />
        </div>

        <div className={classes.control}>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" placeholder="Amount" />
        </div>

        <div className={classes.control}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value="now"
            min="2018-01-01"
            max="2023-12-31"
          ></input>
        </div>
        <Button text="Add" />
        <Button text="Cancel" />
      </form>
    </div>
  );
};

export default IncomeForm;
