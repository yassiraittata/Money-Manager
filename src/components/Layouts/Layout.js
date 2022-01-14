import React from "react";

import MainHeader from "./MainHeader";
import Card from "../UI/Card";

const Layout = (props) => {
  return (
    <>
      <MainHeader />
      <main>
        <Card>{props.children}</Card>
      </main>
      ;
    </>
  );
};

export default Layout;
