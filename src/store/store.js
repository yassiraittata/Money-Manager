import { createSlice, configureStore } from "@reduxjs/toolkit";
import { db } from "../firebase";

const initialState = {
  incomes: [],
  expenses: [],
  expensesAmount: 0,
  incomesAmount: 0,
  totalAmount: 0,
};

const TransactionSlice = createSlice({
  initialState,
  name: "Transaction Slice",
  reducers: {
    fetchIncomes(state, action) {
      console.log(action.payload);
      state.incomes = action.payload;
      const incomesAmount = state.incomes.map((el) => el.amount);
      const total = incomesAmount.reduce((el, cur) => el + cur, 0);
      state.incomesAmount = total;
    },

    fetchExpenses(state, action) {
      console.log(action.payload);
      state.expenses = action.payload;
      const expensesAmount = state.expenses.map((el) => el.amount);
      const total = expensesAmount.reduce((el, cur) => el + cur, 0);
      state.expensesAmount = total;
    },

    addIncome(state, action) {
      console.log(state.incomes);
      state.incomesAmount = state.incomesAmount + action.payload.income.amount;
      state.totalAmount = state.totalAmount + action.payload.income.amount;
      state.incomes.push(action.payload.income);
    },

    addExpense(state, action) {
      state.expensesAmount =
        state.expensesAmount + action.payload.expense.amount;
      state.totalAmount = state.totalAmount + action.payload.expense.amount;
      state.expenses.push(action.payload.expense);
    },

    deleteIncome(state, action) {
      console.log("id :", action.payload);
      console.log(state.incomes);
      const income = state.incomes.find((el) => el.id === action.payload);

      state.incomesAmount = state.incomesAmount - income.amount;
      state.totalAmount = state.totalAmount + income.amount;

      const updatedList = state.incomes.filter((el) => el.id !== income.id);
      state.incomes = updatedList;
    },

    deleteExpense(state, action) {
      console.log(action);

      const expense = state.expenses.find((el) => el.id === action.payload);

      state.expensesAmount = state.expensesAmount - expense.amount;
      state.totalAmount = state.totalAmount + expense.amount;

      const updatedList = state.expenses.filter((el) => el.id !== expense.id);
      state.expenses = updatedList;
    },

    // filterByDate(state, action) {
    //   console.log(action.payload);
    //   const fitlerdIncomes = state.incomes.map((el) => {
    //     const month = el.date.toLocaleString("en-US", { month: "long" });
    //     if (month === action.payload) {
    //       return el;
    //     }
    //   });

    //   const fitlerdExpenses = state.expenses.map((el) => {
    //     const month = el.date.toLocaleString("en-US", { month: "long" });
    //     if (month === action.payload) {
    //       return el;
    //     }
    //   });

    //   state.incomes = fitlerdIncomes;
    //   state.expenses = fitlerdExpenses;
    // },
  },
});

// Action creator: Thunks

const store = configureStore({
  reducer: TransactionSlice.reducer,
});

export const transactionActions = TransactionSlice.actions;

export default store;
