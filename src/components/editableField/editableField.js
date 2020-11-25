import React from "react";
import classes from "./editableField.css";

const EditableField = (props) => {
  let currencyRender;
  let editable;
  let typename;
  let classNameAsssigned;

  if (props.currency) {
    currencyRender = <span className={classes.Prefix}>$</span>;
  }

  if (props.edit) {
    editable = true;
  }

  if (props.type === "income") {
    typename = "income";
  } else {
    typename = "";
  }

  switch (props.type) {
    case "income":
      typename = "income";
      break;
    case "statement":
      typename = "statement";
      break;

    case "adjustments":
      typename = "adjustments";
      break;
    case "revision":
      typename = "revision";
      break;
    default:
      typename = "";
  }

  if (typename === "income") {
    classNameAsssigned = classes.Field;
  } else if (editable) {
    classNameAsssigned = classes.Button;
  } else {
    classNameAsssigned = classes.Disabled;
  }

  return (
    <div className={classes.Div}>
      {currencyRender}
      <input
        className={classNameAsssigned}
        onChange={(event) => props.changed(event, typename)}
        value={props.value}
        disabled={editable}
      />
    </div>
  );
};

export default EditableField;
