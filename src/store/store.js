import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  incomes: [
    {
      title: "Something",
      date: "20/12/20",
      amount: 500,
    },
  ],
  expenses: [
    {
      title: "Something",
      date: "20/12/20",
      amount: 500,
      details: [
        {
          item: "",
          price: "",
        },
      ],
    },
  ],
  totalAmount: 0,
};

const TransactionSlice = createSlice({
  initialState,
  reducers: {
    addIncome(state, action) {
      state.incomes.push(action.payload.income);
    },

    addExpense(state, action) {
      state.expenses.push(action.payload.expense);
    },
  },
});

const store = configureStore({
  reducer: TransactionSlice.reducer,
});

export const transactionActions = TransactionSlice.actions;

export default store;
