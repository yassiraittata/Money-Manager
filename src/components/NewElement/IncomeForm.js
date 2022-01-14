import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../UI/Button";

import classes from "./AddNewElement.module.css";

const IncomeForm = () => {
  const incomeForm = useFormik({
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
      const income = {
        title: values.title,
        amount: values.amount,
        date: values.date,
      };

      console.log(income);
    },
  });

  const titleClasses =
    incomeForm.errors.title && incomeForm.touched.title
      ? `${classes.invalid}`
      : "";

  const amountClasses =
    incomeForm.errors.amount && incomeForm.touched.amount
      ? `${classes.invalid}`
      : "";

  const dateClasses =
    incomeForm.errors.date && incomeForm.touched.date
      ? `${classes.invalid}`
      : "";

  return (
    <div>
      <form className={classes.form} onSubmit={incomeForm.handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Title:</label>
          <input
            className={titleClasses}
            type="text"
            id="title"
            name="title"
            onChange={incomeForm.handleChange}
            onBlur={incomeForm.handleBlur}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="amount">Amount:</label>
          <input
            className={amountClasses}
            type="number"
            id="amount"
            name="amount"
            onChange={incomeForm.handleChange}
            onBlur={incomeForm.handleBlur}
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
            onChange={incomeForm.handleChange}
            onBlur={incomeForm.handleBlur}
          ></input>
        </div>
        <Button text="Add" />
      </form>
    </div>
  );
};

export default IncomeForm;
