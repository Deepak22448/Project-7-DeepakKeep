import React, { useState } from "react";
import "./styleBody.css";
const KeepBody = (props) => {
  const initialValue = {
    title: "",
    main: ""
  };
  const [input, setInput] = useState(initialValue);

  const extractData = (e) => {
    let { value, name } = e.target;

    setInput({
      ...input,
      [name]: value
    });
  };

  const note = () => {
    if (input.title !== "" || input.main !== "") {
      props.getDataInApp(input);
      setInput(initialValue);
    } else {
      props.setError(true);
    }
  };

  return (
    <>
      <div
        className={`container my-3 bg-${
          props.mode === "light" ? "white" : "secondary"
        }`}
      >
        <input
          onChange={extractData}
          value={input.title}
          type="text"
          name="title"
          id="title"
          className=" mx-auto fs-1 fs-bolder"
          placeholder="Title...."
          autoComplete="off"
        />

        <textarea
          onChange={extractData}
          value={input.main}
          className="d-block mx-auto"
          id="main"
          name="main"
          cols="80"
          rows="7"
          placeholder="Enter you'r notes here..."
        />
        <button className="btn-add btn btn btn-warning" onClick={note}>
          {" "}
          <i className="fas fa-plus mx-2"></i>Add Note
        </button>
      </div>
    </>
  );
};

export default KeepBody;
