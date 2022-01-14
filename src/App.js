import ElementsList from "./components/Elements/ElementsList";
import AddNewElement from "./components/NewElement/AddNewElement";
import Card from "./components/UI/Card";
import Layout from "./components/Layouts/Layout";

function App() {
  return (
    <>
      <Layout>
        <Card>
          <AddNewElement />
        </Card>
        {/* <Card>
          <ElementsList />
        </Card> */}
      </Layout>
    </>
  );
}

export default App;
