import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>MoneyManager</h1>
      <nav className={classes.nav}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? ` ${classes.link} ${classes.active}` : classes.link
            }
            to="/transactions"
          >
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? ` ${classes.link} ${classes.active}` : classes.link
            }
            to="/add-transaction"
          >
            New Transaction
          </NavLink>
        </li>
      </nav>
    </header>
  );
};

export default MainHeader;
