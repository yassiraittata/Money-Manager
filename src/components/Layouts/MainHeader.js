import React from "react";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>MoneyManager</h1>
      <nav className={classes.nav}>
        <li>
          <a href="#" className={classes.link}>
            Transactions
          </a>
        </li>
        <li>
          <a href="#" className={classes.link}>
            New Transaction
          </a>
        </li>
      </nav>
    </header>
  );
};

export default MainHeader;
