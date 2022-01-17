import React, { useState } from "react";
import Button from "../UI/Button";

import classes from "./ElementItem.module.css";

const ElementItem = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  console.log(props);

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
        <button>
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
        {showDetail &&
          props.detail &&
          props.detail.map((el) => {
            <ul className={classes.detail__items}>
              <li>
                <h4>{el.item}</h4>
                <p>${el.price}</p>
              </li>
            </ul>;
          })}
      </div>
    </>
  );
};

export default ElementItem;
