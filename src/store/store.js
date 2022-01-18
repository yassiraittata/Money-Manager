import { createSlice, configureStore } from "@reduxjs/toolkit";

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
    addIncome(state, action) {
      // console.log("the income was added");
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
      console.log(action);

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
  },
});

const store = configureStore({
  reducer: TransactionSlice.reducer,
});

export const transactionActions = TransactionSlice.actions;

export default store;
