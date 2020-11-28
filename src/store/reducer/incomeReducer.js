import * as actionTypes from "../actions/actionTypes";

const initialStateRow = {
  rows: [],
  totalRevisions: 0,
  totalStatements: 0,
  totalAdjustments: 0,
};

const reducer = (state = initialStateRow, action) => {
  switch (action.type) {
    case actionTypes.ADD_ROWS:
      const newRow = {
        id: action.id,
        name: "",
        statement: "",
        adjustments: "",
        revision: "",
        editable: true,
        income: "",
      };

      return { ...state, rows: state.rows.concat(newRow) };

    case actionTypes.DELETE_ROWS:
      return {
        ...state,
        rows: state.rows.filter((row) => row.id !== action.idRemove),
      };
    case actionTypes.EDIT_ROWS:
      return {
        ...state,
        rows: state.rows.map((row) => {
          return row.id === action.idEdit
            ? { ...row, editable: !row.editable }
            : row;
        }),
      };
    case actionTypes.EDIT_INPUT:
      return {
        ...state,
        rows: state.rows.map((row) => {
          if (row.id === action.idInput && action.fieldtype === "income") {
            return { ...row, income: action.text };
          }
          if (row.id === action.idInput && action.fieldtype === "statement") {
            return { ...row, statement: action.text };
          }
          if (row.id === action.idInput && action.fieldtype === "adjustments") {
            return { ...row, adjustments: action.text };
          }
          if (row.id === action.idInput && action.fieldtype === "revision") {
            return { ...row, revision: action.text };
          } else {
            return row;
          }
        }),
      };
      case actionTypes.UPDATE_TOTAL:
        return {
          ...state,
          totalRevisions : action.revisionTotal,
          totalStatements: action.statementTotal,
          totalAdjustments: action.adjustmentTotal,
          }
        
    default:
      return state;
  }
};
export default reducer;
