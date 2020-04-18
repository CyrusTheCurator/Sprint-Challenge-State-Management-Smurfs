import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchData, postData, deleteSmurf } from "../actions/index";
import { connect } from "react-redux";
import "bulma/css/bulma.css";

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
    <div className="App notification is-bold margin-fixer">
      <h1>Smurf. Gurf.</h1>
      <div>Welcome to our 'secure database'</div>
      <div>You may begin browsing</div>{" "}
      <button
        className="button is-primary"
        onClick={() => {
          props.fetchData();
        }}
      >
        GET SMURFS
      </button>
      <br />
      <div className="newSmurfContainer">
        <p className="title is-2">Add-A-Smurf</p>
        <p className="subtitle is-5">
          Fill out the form below and click the post button to add your smurf to
          the village
        </p>
        <br />
        <form>
          <label>
            Enter Name
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
            class="button is-dark"
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
      {/* <label>
        Look up smurf <input></input>
      </label>
      <button
        onClick={(e) => {
          e.preventDefault();

          props.fetchData();
        }}
      >
        Clear Search{" "}
      </button> */}
      <div className="title">List Of All Known Smurfs:</div>
      <br />
      <div className="fetchedSmurfs">
        {props.smurfs.length > 0 ? (
          props.smurfs.map((smurf) => {
            return (
              <div className="smurfContainer" id={smurf.id}>
                <p className="title is-5">Name: {smurf.name} </p>
                <p className="title is-5">Age: {smurf.age} </p>
                <p className="title is-5">height: {smurf.height} </p>
                <button
                  className="button is-danger"
                  onClick={(e) => {
                    props.deleteSmurf(smurf.id);
                  }}
                >
                  Banish Smurf
                </button>{" "}
              </div>
            );
          })
        ) : (
          <h4>Press 'Get Smurfs' to retrieve a list of smurfs</h4>
        )}
        {props.smurfs.length === 0 ? (
          <h4>Database is currently empty. Please add more smurfs!</h4>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchData, postData, deleteSmurf })(
  App
);
