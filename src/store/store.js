import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  incomes: [],
  expenses: [],
  expensesAmount: 0,
  incomeAmount: 0,
  totalAmount: 0,
};

const TransactionSlice = createSlice({
  initialState,
  name: "Transaction Slice",
  reducers: {
    addIncome(state, action) {
      // console.log("the income was added");
      // console.log(action);
      state.expensesAmount = state.expensesAmount + action.payload.price;
      state.totalAmount = state.totalAmount + action.payload.price;
      state.incomes.push(action.payload.income);
    },

    addExpense(state, action) {
      state.incomeAmount = state.incomeAmount + action.payload.price;
      state.totalAmount = state.totalAmount + action.payload.price;
      state.expenses.push(action.payload.expense);
    },
  },
});

const store = configureStore({
  reducer: TransactionSlice.reducer,
});

export const transactionActions = TransactionSlice.actions;

export default store;
