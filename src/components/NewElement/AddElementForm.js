import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

import * as Yup from "yup";
import { transactionActions as actions } from "../../store/store";
import { addIncome, addExpense } from "../../store/actions";

import Button from "../UI/Button";

import classes from "./AddNewElement.module.css";

const AddElemetForm = (props) => {
  const dispatch = useDispatch();
  // Showing detail form:
  const [isShowNestedForm, setIsShowNestedForm] = useState(false);
  // List of the items
  const [detailExpense, setDetailExpense] = useState([]);

  const navigate = useNavigate();

  const transactionFormik = useFormik({
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
          detail: detailExpense,
        };

        //Add Expense
        dispatch(addExpense(expense));
        navigate("/transactions");
      } else {
        const income = {
          title: values.title,
          amount: values.amount,
          date: values.date,
        };

        // Add Income
        dispatch(addIncome(income));
        navigate("/transactions");
      }
    },
  });

  // console.log(transactionFormik.errors);
  // console.log(transactionFormik.touched);

  const detailFormik = useFormik({
    initialValues: {
      item: "",
      price: "",
    },
    validationSchema: Yup.object({
      item: Yup.string().required(),
      price: Yup.number().required(),
    }),
  });

  // Classes of all inputs
  const titleClasses =
    transactionFormik.errors.title && transactionFormik.touched.title
      ? `${classes.invalid}`
      : "";

  const amountClasses =
    transactionFormik.errors.amount && transactionFormik.touched.amount
      ? `${classes.invalid}`
      : "";

  const dateClasses =
    transactionFormik.errors.date && transactionFormik.touched.date
      ? `${classes.invalid}`
      : "";

  const itemClasses =
    detailFormik.errors.item && detailFormik.touched.item
      ? `${classes.invalid}`
      : "";

  const priceClasses =
    detailFormik.errors.price && detailFormik.touched.price
      ? `${classes.invalid}`
      : "";
  // End region

  let expenseFrom;

  const submitHandlerNestedForm = (e) => {
    e.preventDefault();
    console.log("hello");
    // console.log("hello");
    const detailItem = {
      id: Math.random() * 1000000,
      item: detailFormik.values.item,
      price: detailFormik.values.price,
    };

    setDetailExpense((prevState) => {
      return [...prevState, detailItem];
    });

    detailFormik.values.item = "";
    detailFormik.values.price = "";
    detailFormik.errors = {};
    detailFormik.touched = {};
    console.log(detailExpense);
  };

  const deleteItem = (id) => {
    setDetailExpense((prevState) => {
      return prevState.filter((el) => el.id !== id);
    });
  };

  if (props.type === 0) {
    expenseFrom = (
      <>
        <div className={`${classes.control} ${classes.detail}`}>
          <label htmlFor="title">Details:</label>
          <input
            className={classes.detail__add_btn}
            type="button"
            onClick={() => {
              setIsShowNestedForm(true);
            }}
            value="+"
          />
        </div>

        {isShowNestedForm && (
          <>
            <div className={classes.detail__form}>
              <input
                type="text"
                id="item"
                name="item"
                maxLength="20"
                placeholder="Item"
                className={itemClasses}
                onChange={detailFormik.handleChange}
                onBlur={detailFormik.handleBlur}
                value={detailFormik.values.item}
              />
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                className={priceClasses}
                onChange={detailFormik.handleChange}
                onBlur={detailFormik.handleBlur}
                value={detailFormik.values.price}
              />
              {detailFormik.values.item !== "" &&
                detailFormik.values.price !== "" && (
                  // <Button
                  //   type="button"
                  //   text="Add"
                  //   onClick={submitHandlerNestedForm}
                  // />
                  <input
                    type="button"
                    value="Add"
                    className={`${classes.detail__form_btn} button`}
                    onClick={submitHandlerNestedForm}
                  />
                )}
              <input
                type="button"
                value="Cancel"
                className={`${classes.detail__form_btn} button`}
                onClick={submitHandlerNestedForm}
                onClick={() => {
                  setIsShowNestedForm(false);
                }}
              />
            </div>

            {detailExpense.map((el) => {
              return (
                <>
                  <div key={el.id} className={classes.detail__container}>
                    <p>{el.item}</p>
                    <p>{el.price}</p>
                    <button
                      onClick={() => {
                        deleteItem(el.id);
                      }}
                    >
                      <ion-icon name="close-outline"></ion-icon>
                    </button>
                  </div>
                </>
              );
            })}
          </>
        )}
      </>
    );
  }
  return (
    <form className={classes.form} onSubmit={transactionFormik.handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="title">Title:</label>
        <input
          className={titleClasses}
          type="text"
          id="title"
          name="title"
          // placeholder="Title"
          onChange={transactionFormik.handleChange}
          onBlur={transactionFormik.handleBlur}
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
          onChange={transactionFormik.handleChange}
          onBlur={transactionFormik.handleBlur}
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
          onChange={transactionFormik.handleChange}
          onBlur={transactionFormik.handleBlur}
        ></input>
      </div>

      {expenseFrom}

      <Button text="Add" type="submit" />
      <Button text="Cancel" />
    </form>
  );
};

export default AddElemetForm;
