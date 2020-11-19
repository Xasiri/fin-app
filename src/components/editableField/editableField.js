import React from "react";
import classes from "./editableField.css";

const EditableField = (props) => {
  let currencyRender;
  let editable;

  if (props.currency) {
    currencyRender = <span className={classes.Prefix}>$</span>;
  }

  if (props.edit) {
    editable = true;
  }

  return (
    <div>
      {currencyRender}
      <input
        className={editable ? classes.Button : classes.Disabled}
        onChange={props.changed}
        value={props.value}
        disabled={editable}
      />
    </div>
  );
};

export default EditableField;
