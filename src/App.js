import React from 'react';
import Main from "./Container/Main";
import Header from "./Components/header";
import Footer from "./Components/footer";
import "./index.css";
import "./responsive.css";

export default () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};