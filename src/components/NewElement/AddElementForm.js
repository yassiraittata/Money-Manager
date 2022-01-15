import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../UI/Button";

import classes from "./AddNewElement.module.css";

const AddElemetForm = (props) => {
  const ExpenseForm = useFormik({
    initialValues: {
      title: "",
      amount: "",
      date: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Must not be empty!"),
      amount: Yup.number().required("Must not be empty!"),
      date: Yup.date().required("Select a date"),
    }),

    onSubmit(values) {
      if (props.type === 0) {
        const expense = {
          title: values.title,
          amount: values.amount,
          date: values.date,
        };
        console.log("expense");
      } else {
        const income = {
          title: values.title,
          amount: values.amount,
          date: values.date,
        };
        console.log("income");
      }

      //   console.log(expense);
    },
  });

  // console.log(ExpenseForm.errors);
  // console.log(ExpenseForm.touched);

  const titleClasses =
    ExpenseForm.errors.title && ExpenseForm.touched.title
      ? `${classes.invalid}`
      : "";

  const amountClasses =
    ExpenseForm.errors.amount && ExpenseForm.touched.amount
      ? `${classes.invalid}`
      : "";

  const dateClasses =
    ExpenseForm.errors.date && ExpenseForm.touched.date
      ? `${classes.invalid}`
      : "";

  let expenseFrom;

  if (props.type === 0) {
    expenseFrom = (
      <>
        <div className={`${classes.control} ${classes.detail}`}>
          <label htmlFor="title">Details:</label>
          <a href="#">
            <ion-icon name="add-outline"></ion-icon>
          </a>
        </div>

        <div className={classes.detail__container}>
          <p>New Car</p>
          <p>$2500</p>
          <a href="#">
            <ion-icon name="close-outline"></ion-icon>
          </a>
        </div>
      </>
    );
  }
  return (
    <form className={classes.form} onSubmit={ExpenseForm.handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="title">Title:</label>
        <input
          className={titleClasses}
          type="text"
          id="title"
          name="title"
          // placeholder="Title"
          onChange={ExpenseForm.handleChange}
          onBlur={ExpenseForm.handleBlur}
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="amount">Amount:</label>
        <input
          className={amountClasses}
          type="number"
          id="amount"
          name="amount"
          // placeholder="Amount"
          onChange={ExpenseForm.handleChange}
          onBlur={ExpenseForm.handleBlur}
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="date">Date:</label>
        <input
          className={dateClasses}
          type="date"
          id="date"
          name="date"
          min="2018-01-01"
          max="2023-12-31"
          onChange={ExpenseForm.handleChange}
          onBlur={ExpenseForm.handleBlur}
        ></input>
      </div>

      {expenseFrom}

      <Button text="Add" type="submit" />
      <Button text="Cancel" />
    </form>
  );
};

export default AddElemetForm;
