import * as actionTypes from "./actionTypes";

export const addRows = () => {
  return {
    type: actionTypes.ADD_ROWS,
    id: Math.ceil(Math.random() * 100),
  };
};

export const deleteRows = (idRemove) => {
  return {
    type: actionTypes.DELETE_ROWS,
    idRemove: idRemove,
  };
};

export const editRows = (idEdit) => {
  return {
    type: actionTypes.EDIT_ROWS,
    idEdit: idEdit,
  };
};

export const editInput = (text, idInput, fieldtype) => {
  return {
    type: actionTypes.EDIT_INPUT,
    idInput: idInput,
    text: text,
    fieldtype: fieldtype,
  };
};
