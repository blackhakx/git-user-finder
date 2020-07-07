import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert && (
      <div
        className={`alert alert-${alert.type}`}
        style={{
          textAlign: "left",
          backgroundColor: "lightGrey",
          color: "red",
        }}
      >
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
