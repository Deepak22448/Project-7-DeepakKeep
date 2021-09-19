import React from "react";

const Notes = (props) => {
  const id = props.id;

  const deleteBtn = () => {
    props.deleteHandle(id);
    // console.log(id);
  };

  return (
    <>
      <p className="fs-2 fw-blod">{props.title} </p>
      <p>{props.main} </p>
      <button className="btn btn-danger" onClick={deleteBtn}>
        <i className="fas fa-trash"></i> Delete
      </button>
    </>
  );
};

export default Notes;
