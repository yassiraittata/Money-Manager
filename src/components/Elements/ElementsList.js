import Reactexpenses, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { db } from "../../firebase";
import { collection, getDoc, getDocs } from "@firebase/firestore";

import { transactionActions } from "../../store/store";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ElementItem from "./ElementItem";
import Spinner from "../UI/Spinner";

import classes from "./ElementsList.module.css";

const ElementsList = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const incomesnState = useSelector((state) => state.incomes);
  const expensesnState = useSelector((state) => state.expenses);
  const totalExpeses = useSelector((state) => state.expensesAmount);
  const totalIncomes = useSelector((state) => state.incomesAmount);

  const incomesCollection = collection(db, "incomes");
  const expensesCollection = collection(db, "expenses");

  const getdate = (e) => {
    dispatch(transactionActions.filterByDate(e.target.value));
  };

  let IncomeDataFetched = [];

  const getData = async () => {
    setIsLoading(true);
    const incomesData = await getDocs(incomesCollection);
    const expensesData = await getDocs(expensesCollection);

    // console.log(
    //   "data",
    //   data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    // );
    // IncomeDataFetched = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setIncomes(incomesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setExpenses(
      expensesData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setIsLoading(false);
    return {
      incomes: incomesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
      expenses: expensesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    };
  };

  useEffect(() => {
    getData();
  }, [incomesnState, expensesnState]);

  useEffect(() => {
    getData().then((result) => {
      dispatch(transactionActions.fetchIncomes(result.incomes));
      dispatch(transactionActions.fetchExpenses(result.expenses));
    });
  }, []);

  return (
    <Card using="list">
      <div className={classes.transactions_list}>
        <div className={classes.header}>
          <h3>Filter by Year</h3>
          <div className={classes.header__selects}>
            <select name="months" id="months" onChange={getdate}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>

            <select name="years" id="years">
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        {/* <ElementItem /> */}
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <div className={classes.main}>
              <div className={classes.icome_item}>
                <div className={classes.total_amount}>
                  <label>Total:</label>
                  <label>${totalIncomes}</label>
                </div>
                {incomes.map((el) => (
                  <ElementItem
                    key={el.id}
                    type={1}
                    id={el.id}
                    title={el.title}
                    amount={el.amount}
                    date={el.date}
                  />
                ))}
              </div>
              <div className={classes.expense_item}>
                <div className={classes.total_amount}>
                  <label>Total:</label>
                  <label>${totalExpeses}</label>
                </div>
                {expenses.map((el) => (
                  <ElementItem
                    type={0}
                    id={el.id}
                    key={el.id}
                    title={el.title}
                    amount={el.amount}
                    date={el.date}
                    detail={el.detail ? el.detail : null}
                  />
                ))}
              </div>
            </div>

            <div className={classes.footer}>
              <Button text="Delete All" />
            </div>
          </>
        )}
      </div>
    </Card>
  );
};

export default ElementsList;
