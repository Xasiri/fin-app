import React, { useEffect, useRef, useState } from "react";
import classes from "./inputTable.css";
import EditableRow from "../editableRow/editableRow";
import LabelRow from "../labelRow/labelRow";
import * as actions from "../../store/actions/actionIndex";
import { connect } from "react-redux";

const InputTable = (props) => {
  const rowList = props.rows.length
    ? props.rows.map((row) => {
        return <EditableRow key={row.id} idx={row.id}></EditableRow>;
      })
    : null;

  const [statementTotal, setStatementTotal] = useState(0);
  const [adjustmentTotal, setAdjustmentTotal] = useState(0);
  const [revisionTotal, setRevisionTotal] = useState(0);

  const statementRef = useRef();
  const adjustmentRef = useRef();
  const revRef = useRef();

  useEffect(() => {
    statementRef.current = props.rows.reduce(
      (total, row) => total + Number(row.statement),
      0
    );
    adjustmentRef.current = props.rows.reduce(
      (total, row) => total + Number(row.adjustments),
      0
    );
    revRef.current = props.rows.reduce(
      (total, row) => total + Number(row.revision),
      0
    );
    setAdjustmentTotal(adjustmentRef.current);
    setStatementTotal(statementRef.current);
    setRevisionTotal(revRef.current);
    console.log("render InputTable");
  }, [props.rows]);

  return (
    <>
      <div>
        <div>
          <LabelRow
            col1=""
            col2="Statment"
            col3="Adjustments"
            col4="Revision"
            addRow={props.onRowAdded}
          ></LabelRow>
        </div>
        <div>
          <LabelRow
            col1="Income"
            col2=""
            col3=""
            col4=""
            hideIcons="true"
          ></LabelRow>
        </div>
      </div>
      {rowList}
      <div>
        <LabelRow
          col1="Total "
          col2={statementTotal}
          col3={adjustmentTotal}
          col4={revisionTotal}
          hideIcons="true"
          total="true"
        ></LabelRow>
      </div>
      <div className={classes.label}>
        <button className={classes.Button}>Submit</button>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRowAdded: () => dispatch(actions.addRows()),
    onRowRemoved: (removeId) => dispatch(actions.deleteRows(removeId)),
  };
};

const mapStateToProps = (state) => {
  return {
    rows: state.income.rows,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputTable);
