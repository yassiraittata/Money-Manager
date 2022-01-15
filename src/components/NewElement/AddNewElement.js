import React, { useState } from "react";
import Card from "../UI/Card";
import AddElemetForm from "./AddElementForm";

import classes from "./AddNewElement.module.css";

const AddNewElement = (props) => {
  const [transactionType, setTransactionType] = useState(1);

  return (
    <Card using="form">
      <div className={classes.container}>
        <div className={classes.head}>
          <button
            className={`${transactionType === 1 ? classes.active_Button : ""}`}
            onClick={() => setTransactionType(1)}
          >
            Incomes
          </button>
          <button
            className={`${transactionType === 0 ? classes.active_Button : ""}`}
            onClick={() => setTransactionType(0)}
          >
            Expenses
          </button>
        </div>

        {transactionType === 0 && (
          <AddElemetForm type={transactionType} onActive="true" />
        )}
        {transactionType === 1 && (
          <AddElemetForm type={transactionType} onActive="true" />
        )}
      </div>
    </Card>
  );
};

export default AddNewElement;
