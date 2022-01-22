import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  doc,
} from "@firebase/firestore";

import { transactionActions } from "./store";

const incomesCollection = collection(db, "incomes");
const expensesCollection = collection(db, "expenses");

export const fetchIncomes = () => {
  return async (dispatch) => {
    const data = await getDocs(incomesCollection);
    console.log(data.docs.map((el) => el.data()));
    // setUsers(data.docs.map((doc) => ({ ...doc.data() })));
  };
};

const fetchExpeses = () => {
  return (dispatch) => {};
};

export const addIncome = (incomeData) => {
  return async (dispatch) => {
    const sendAddIncomeRequest = async () => {
      await addDoc(incomesCollection, incomeData);
      // navigate("/transactions");
      // console.log(err);
    };

    try {
      await sendAddIncomeRequest();
    } catch (err) {
      console.log(err);
    }

    dispatch(transactionActions.addIncome(incomeData));
  };
};

export const addExpense = (expenseData) => {
  return async (dispatch) => {
    const sendAddExpenseRequest = async () => {
      await addDoc(expensesCollection, expenseData);
    };

    try {
      await sendAddExpenseRequest();
    } catch (err) {
      console.log(err);
    }
    dispatch(transactionActions.addExpense(expenseData));
  };
};

export const deleteIncome = (id) => {
  return async (dispatch) => {
    const deleteIncomeHttpRequest = async () => {
      const incomeDoc = doc(db, "incomes", id);
      await deleteDoc(incomeDoc);
      console.log(incomeDoc);
    };

    try {
      await deleteIncomeHttpRequest();
    } catch (err) {
      console.log(err);
    }

    dispatch(transactionActions.deleteIncome(id));
  };
};

export const deleteExpense = (id) => {
  return async (dispatch) => {
    const deleteExpenseHttpRequest = async () => {
      const expenseDoc = doc(db, "expenses", id);
      await deleteDoc(expenseDoc);
      console.log(expenseDoc);
    };

    try {
      await deleteExpenseHttpRequest();
    } catch (err) {
      console.log(err);
    }

    dispatch(transactionActions.deleteExpense(id));
  };
};
