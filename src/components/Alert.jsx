import React from "react";

const Alert = ({ message, setError, mode }) => {
  return (
    <>
      <div className="overlay">
        <div className="alert_container bg-warning">
          <div className="alertMsg fw-bolder">{message}</div>
          <i
            className="fas fa-times alertCancle d-flex justify-content-center align-items-center"
            onClick={() => {
              setError(false);
            }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Alert;
