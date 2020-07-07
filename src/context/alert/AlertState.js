import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import React, { useReducer } from "react";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = { alert: null };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Alert empty search text and empty if not
  const setAlert = (msg, type) => {
    msg
      ? dispatch({ type: SET_ALERT, payload: { msg, type } })
      : dispatch({ type: REMOVE_ALERT });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
