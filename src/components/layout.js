import React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
