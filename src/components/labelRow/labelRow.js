import React from "react";
import classes from "./labelRow.css";
import LabelField from "../labelField/labelField";
import IconButton from "@material-ui/core/IconButton";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AddIcon from "@material-ui/icons/Add";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const LabelRow = (props) => {
  let showRow;

  if (!props.hideIcons) {
    showRow = (
      <div className={classes.LabelRow}>
        <LabelField label={props.col1}></LabelField>
        <LabelField label={props.col2}></LabelField>
        <LabelField label={props.col3}></LabelField>
        <LabelField label={props.col4}></LabelField>
        <IconButton className={classes.Icon}>
          <AccountBalanceIcon />
        </IconButton>
        <IconButton
          className={classes.Icon}
          onClick={() => {
            props.addRow();
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    );
  } else if (props.total) {
    showRow = (
      <div>
        <div className={classes.TotalLabel}>
          <LabelField label={props.col1}></LabelField>
          <LabelField label={props.col2} currency="true"></LabelField>
          <LabelField label={props.col3} currency="true"></LabelField>
          <LabelField label={props.col4} currency="true"></LabelField>

          <IconButton className={classes.PIcon}>
            <EditIcon className={classes.Span} />
          </IconButton>
          <IconButton className={classes.PIcon}>
            <DeleteIcon className={classes.Span} />
          </IconButton>
        </div>
      </div>
    );
  } else {
    showRow = (
      <div className={classes.LabelRow}>
        <LabelField label={props.col1}></LabelField>
        <LabelField label={props.col2}></LabelField>
        <LabelField label={props.col3}></LabelField>
        <LabelField label={props.col4}></LabelField>
      </div>
    );
  }
  return showRow;
};

export default LabelRow;
