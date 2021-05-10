import React from "react";
import { Fragment } from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import classes from "./MainLayout.module.css";

export default function mainLayout(props) {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.contentWrapper}>{props.children}</div>
      <Footer />
    </div>
  );
}
