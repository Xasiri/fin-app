import React from "react";
import classes from "./labelField.css";

const LabelField = (props) => {
  let currencyRender;
  if (props.currency) {
    currencyRender = <span className={classes.Prefix}>$</span>;
  }

  return (
    <div className={classes.Div}>
      {currencyRender}
      <label className={classes.Button}>{props.label}</label>
    </div>
  );
};

export default LabelField;
