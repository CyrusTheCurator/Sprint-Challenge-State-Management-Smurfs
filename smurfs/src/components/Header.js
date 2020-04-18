import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchData, postData, deleteSmurf } from "../actions/index";
import { connect } from "react-redux";

function Header(props) {
  return <div>sadness only</div>;
}
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchData, postData, deleteSmurf })(
  App
);
