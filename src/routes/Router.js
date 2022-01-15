import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AddTransaction from "../pages/AddTransaction";
import Transactions from "../pages/Transactions";

const Router = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/transactions" />} /> */}
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
      </Routes>
    </>
  );
};

export default Router;
