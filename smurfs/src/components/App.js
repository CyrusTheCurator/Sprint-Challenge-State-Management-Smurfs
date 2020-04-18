import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchData, postData } from "../actions/index";
import { connect } from "react-redux";

function App(props) {
  const [inputText, setInputText] = useState("");
  const [newSmurfHeight, setNewSmurfHeight] = useState("");
  const [newSmurfAge, setNewSmurfAge] = useState("");

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };
  const [newSmurfObj, setNewSmurfObj] = useState({});

  useEffect(() => {
    setNewSmurfObj({
      ...newSmurfObj,
      name: inputText,
      age: newSmurfAge,
      height: newSmurfHeight,
    });
  }, [inputText, newSmurfHeight, newSmurfAge]);
  console.log("new obj after pasing is", newSmurfObj);
  return (
    <div className="App">
      <h1>Smurf. Gurf.</h1>
      <div>Welcome to your flerth</div>
      <div>Start inside of your</div>{" "}
      <button
        onClick={() => {
          props.fetchData();
        }}
      >
        GET SMURFS
      </button>
      <br />
      <div className="newSmurfContainer">
        <form>
          <label>
            Enter New Smurf
            <input
              value={inputText}
              id="name"
              placeholder="name"
              onChange={(e) => {
                handleChange(e, setInputText);
              }}
            ></input>
          </label>
          <label>
            Enter Age
            <input
              value={newSmurfAge}
              id="age"
              placeholder="age"
              onChange={(e) => {
                handleChange(e, setNewSmurfAge);
              }}
            ></input>
          </label>
          <label>
            Enter height
            <input
              value={newSmurfHeight}
              id="height"
              placeholder="height"
              onChange={(e) => {
                handleChange(e, setNewSmurfHeight);
              }}
            ></input>
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.postData(newSmurfObj);
            }}
          >
            POST NEW SMURF
          </button>
          <br />
        </form>
      </div>
      <label>
        Look up smurf <input></input>
      </label>
      <button
        onClick={(e) => {
          e.preventDefault();

          props.fetchData();
        }}
      >
        Clear Search{" "}
      </button>
      <div>List Of All Known Smurfs</div>
      <div className="fetchedSmurfs">
        {props.smurfs.length > 0
          ? props.smurfs.map((smurf) => {
              return <div id={""}> {smurf.name} </div>;
            })
          : "No smurfs yet hereeee"}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchData, postData })(App);
