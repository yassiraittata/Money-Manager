import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { transactionActions } from "../../store/store";

import { deleteIncome, deleteExpense } from "../../store/actions";

import classes from "./ElementItem.module.css";

const ElementItem = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const dispatch = useDispatch();

  const deleteTransaction = () => {
    if (props.type === 1) {
      dispatch(deleteIncome(props.id));
    }
    if (props.type === 0) {
      dispatch(deleteExpense(props.id));
    }
  };

  const className =
    props.type === 1
      ? `${classes.element} ${classes.income}`
      : `${classes.element} ${classes.expense}`;

  return (
    <>
      <div className={className}>
        <h3>{props.title}</h3>
        <p>${props.amount}</p>
        <p>{props.date}</p>
        <button onClick={deleteTransaction}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
        {props.type === 0 && !showDetail && (
          <button onClick={() => setShowDetail(true)}>
            <ion-icon name="caret-forward-outline"></ion-icon>
          </button>
        )}
        {props.type === 0 && showDetail && (
          <button onClick={() => setShowDetail(false)}>
            <ion-icon name="caret-down-outline"></ion-icon>
          </button>
        )}

        {showDetail && props.detail && props.detail.length > 0 && (
          <ul className={classes.detail__items}>
            {props.detail.map((el) => {
              return (
                <li>
                  <h4>{el.item}</h4>
                  <h4>${el.price}</h4>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default ElementItem;
