import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./components/Layouts/Layout";
import Router from "./routes/Router";

import { fetchIncomes } from "./store/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIncomes());
  }, []);

  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
