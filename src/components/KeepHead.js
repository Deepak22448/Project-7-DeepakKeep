import React from "react";
import "./styleHead.css";
const KeepHead = (props) => {
  let mode = props.mode;
  return (
    <>
      <div className=" d-flex justify-content-between align-items-center container-fluid bg-warning py-3">
        <div
          className="brand fs-2 fw-bolder"
          style={{ fontFamily: "'Slabo 27px',' cursive'" }}
        >
          <i className="far fa-sticky-note"></i>
          Deepak Keep
        </div>
        <div
          className="sun-div d-flex justify-content-center align-items-center"
          onClick={() => {
            props.changeMode(mode);
          }}
        >
          <i className="fas fa-sun fs-4 "></i>
        </div>
      </div>
    </>
  );
};

export default KeepHead;
