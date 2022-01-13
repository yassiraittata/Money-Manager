import React from "react";
import Button from "../UI/Button";

import classes from "./ElementItem.module.css";

const ElementItem = () => {
  return (
    <>
      <div className={`${classes.element} ${classes.income}`}>
        <h3>Salary</h3>
        <p>$25000</p>
        <p>21/8/2020</p>
        <a href="#">
          <ion-icon name="trash-outline"></ion-icon>
        </a>
      </div>

      <div className={`${classes.element} ${classes.expense}`}>
        <h3>Salary</h3>
        <p>$25000</p>
        <p>25/8/2020</p>
        <a href="#">
          <ion-icon name="close-circle-outline"></ion-icon>
        </a>
      </div>
    </>
  );
};

export default ElementItem;