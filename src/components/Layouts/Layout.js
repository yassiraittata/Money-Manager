import React from "react";

import MainHeader from "./MainHeader";
import Card from "../UI/Card";

const Layout = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>;
    </>
  );
};

export default Layout;
