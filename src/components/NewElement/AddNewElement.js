import React, { useState } from "react";

import classes from "./AddNewElement.module.css";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";

const AddNewElement = (props) => {
  const [transactionType, setTransactionType] = useState("incomes");

  return (
    <>
      {/* <div className={classes.start}>
        <Button text="Add a new Elemet" />
      </div> */}
      <div className={classes.container}>
        <div className={classes.head}>
          <a
            href="#"
            className={`${
              transactionType === "incomes" ? classes.active_Button : ""
            }`}
            onClick={() => setTransactionType("incomes")}
          >
            Incomes
          </a>
          <a
            href="#"
            className={`${
              transactionType === "expenses" ? classes.active_Button : ""
            }`}
            onClick={() => setTransactionType("expenses")}
          >
            Expenses
          </a>
        </div>

        {transactionType === "expenses" && <ExpenseForm onActive="true" />}
        {transactionType === "incomes" && <IncomeForm onActive="true" />}
      </div>
    </>
  );
};

export default AddNewElement;
