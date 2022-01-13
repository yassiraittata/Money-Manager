import React from "react";
import Button from "../UI/Button";

import classes from "./AddNewElement.module.css";

const ExpenseForm = () => {
  return (
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

      <div className={`${classes.control} ${classes.detail}`}>
        <label htmlFor="title">Detail:</label>
        <a href="#">
          <ion-icon name="add-outline"></ion-icon>
        </a>
      </div>
      <form className={classes.detail__form}>
        <input
          type="text"
          id="item"
          name="item"
          maxlength="20"
          placeholder="Item"
        />
        <input type="number" id="price" name="price" placeholder="Price" />
        <Button text="Add" />
        <Button text="Cancel" />
      </form>

      <div className={classes.detail__container}>
        <p>New Car</p>
        <p>$2500</p>
        <a href="#">
          <ion-icon name="close-outline"></ion-icon>
        </a>
      </div>

      <Button text="Add" />
      <Button text="Cancel" />
    </form>
  );
};

export default ExpenseForm;
