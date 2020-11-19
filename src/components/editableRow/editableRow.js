import React, { useState } from "react";
import classes from "./editableRow.css";
import EditableField from "../editableField/editableField";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const EditableRow = (props) => {
  let showRow;
  const [editField, setEditField] = useState("false");
  const [deleteField, setDeleteField] = useState("false");
  const editButtonHandler = (event) => {
    setEditField((value) => !value);
  };

  const deleteButtonHandler = (event) => {
    setDeleteField((value) => {
      value = true;
    });
  };

  if (deleteField) {
    showRow = (
      <div className={classes.EditableRow}>
        <EditableField edit={editField}></EditableField>
        <EditableField currency="true" edit={editField}></EditableField>
        <EditableField currency="true" edit={editField}></EditableField>
        <EditableField currency="true" edit={editField}></EditableField>
        <IconButton
          aria-label="edit"
          className={classes.Icon}
          onClick={editButtonHandler}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          className={classes.Icon}
          onClick={deleteButtonHandler}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    );
  } else {
    showRow = null;
  }

  return showRow;
};

export default EditableRow;
