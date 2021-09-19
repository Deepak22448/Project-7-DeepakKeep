import React from "react";
import { useState } from "react/cjs/react.development";
import KeepBody from "./components/KeepBody";
import KeepHead from "./components/KeepHead";
import Notes from "./components/Notes.js";
import "./styles.css";
const App = () => {
  const [inputArray, setInputArray] = useState([]);
  const [mode, setMode] = useState("light");
  const [error, setError] = useState(false);
  const getDataInApp = (input) => {
    setInputArray((prevVal) => [...prevVal, input]);
  };

  const deleteHandle = (id) => {
    setInputArray(inputArray.filter((Element, index) => index !== id));
  };

  const changeMode = (mode) => {
    let body = document.getElementsByTagName("body")[0];
    let holderTochange = document.getElementsByClassName("mx-auto");
    if (mode === "light") {
      body.style.backgroundColor = "black";
      body.style.color = "white";

      setMode("dark");
    } else if (mode === "dark") {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      setMode("light");
    }

    const changePlaceHolderColor = () => {
      [...holderTochange].forEach((Element) => {
        Element.classList.toggle("placeholderClass");
      });
    };

    changePlaceHolderColor();
  };

  return (
    <>
      <KeepHead mode={mode} changeMode={changeMode} />
      <KeepBody getDataInApp={getDataInApp} mode={mode} setError={setError} />
      <div className="container-fluid">
        <div className="row">
          {inputArray.map((Element, index) => {
            return (
              <div
                key={index}
                className=" col-6 col-md-4 col-lg-3  rounded my-3 border border-dark"
              >
                <Notes
                  title={Element.title}
                  main={Element.main}
                  id={index}
                  deleteHandle={deleteHandle}
                />
              </div>
            );
          })}
        </div>
      </div>
      {error && (
        <div className="overlay">
          <div className="error_container">
            <div className="errorMsg fw-bolder">
              Empty note cannot be added..Please write a note to add.
            </div>

            <i
              className="fas fa-times errorCancle d-flex justify-content-center align-items-center"
              onClick={() => {
                setError(false);
              }}
            ></i>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
