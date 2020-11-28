import React, { useCallback, useState } from "react";
import classes from "./editableRow.css";
import EditableField from "../editableField/editableField";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import * as actions from "../../store/actions/actionIndex";
import { connect } from "react-redux";
import debounce from "lodash.debounce";

const EditableRow = React.memo((props) => {
  let showRow;
  let updatedKeyword;


  
  const debounceSave = useCallback(debounce((updatedKeyword,idx,fieldtype) => 
       props.onRowInputChanged(updatedKeyword,idx,fieldtype),1000),[]);

  const inputChangedHandler = (event, fieldtype) => {
    updatedKeyword = event.target.value;
   
    debounceSave(updatedKeyword, props.idx, fieldtype);
       
    return updatedKeyword;
  };

  showRow = (
    <div className={classes.EditableRow}>
      <EditableField
        edit={!props.editability}
        type="income"
        changed={(event, fieldtype) => inputChangedHandler(event, fieldtype)}
      ></EditableField>

      <EditableField
        currency="true"
        type="statement"
        edit={!props.editability}
        changed={(event, fieldtype) => inputChangedHandler(event, fieldtype)}
      ></EditableField>

      <EditableField
        currency="true"
        type="adjustments"
        edit={!props.editability}
        changed={(event, fieldtype) => inputChangedHandler(event, fieldtype)}
      ></EditableField>

      <EditableField
        currency="true"
        type="revision"
        edit={!props.editability}
        changed={(event, fieldtype) => inputChangedHandler(event, fieldtype)}
      ></EditableField>

      <IconButton
        aria-label="edit"
        className={classes.Icon}
        onClick={() => {
          return props.onRowEdited(props.idx);
        }}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        aria-label="delete"
        className={classes.Icon}
        onClick={() => {
          return props.onRowRemoved(props.idx);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );

  return showRow;
});

const mapDispatchToProps = (dispatch) => {
  return {
    onRowRemoved: (removeId) => dispatch(actions.deleteRows(removeId)),
    onRowEdited: (editId) => dispatch(actions.editRows(editId)),
    onRowInputChanged: (text, inputId, fieldtype) =>
      dispatch(actions.editInput(text, inputId, fieldtype)),
  };
};

const mapStateToProps = (state, ownProps) => {
  const id = +String(Object.values(ownProps));

  function getIndex(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  }

  var index = state.income.rows.length
    ? getIndex(id, state.income.rows, "id")
    : null;

  return {
    editability: state.income.rows.length
      ? state.income.rows[index].editable
      : null,
    statement: state.income.rows[index].editable
      ? state.income.rows[index].statement
      : null,
    adjustments: state.income.rows[index].editable
      ? state.income.rows[index].adjustments
      : null,
    revision: state.income.rows[index].editable
      ? state.income.rows[index].revision
      : null,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableRow);
