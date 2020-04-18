import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";
export const POST_DATA = "POST_DATA";

export const fetchData = (countryCode = "T E S T") => {
  return (dispatch) => {
    dispatch({
      type: FETCH_DATA,
    });
    setTimeout(() => {
      let url = `http://localhost:3333/smurfs`;

      axios
        .get(url)
        .then((res) => {
          const fetchedSmurfs = res.data;
          const smurfsObj = {
            smurfs: fetchedSmurfs,
          };
          dispatch({ type: DATA_SUCCESS, payload: smurfsObj });
        })
        .catch((err) => dispatch({ type: DATA_ERROR, payload: err }));
    }, 10);
  };
};

export const postData = (newSmurf) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_DATA,
    });
    setTimeout(() => {
      let url = `http://localhost:3333/smurfs`;

      axios
        .post(url, newSmurf)
        .then((res) => {
          const fetchedSmurfs = res.data;
          const smurfsObj = {
            smurfs: fetchedSmurfs,
          };
          dispatch({ type: DATA_SUCCESS, payload: smurfsObj });
        })
        .catch((err) => dispatch({ type: DATA_ERROR, payload: err }));
    }, 10);
  };
};

export const deleteSmurf = (smurf) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_DATA,
    });
    setTimeout(() => {
      console.log(smurf);
      let url = `http://localhost:3333/smurfs/${smurf}`;

      axios
        .delete(url, smurf)
        .then((res) => {
          const fetchedSmurfs = res.data;
          const smurfsObj = {
            smurfs: fetchedSmurfs,
          };
          dispatch({ type: DATA_SUCCESS, payload: smurfsObj });
        })
        .catch((err) => dispatch({ type: DATA_ERROR, payload: err }));
    }, 10);
  };
};

export const putData = (countryCode = "T E S T") => {
  return (dispatch) => {
    dispatch({
      type: FETCH_DATA,
    });
    setTimeout(() => {
      let url = `http://localhost:3333/smurfs`;

      axios
        .get(url)
        .then((res) => {
          const fetchedSmurfs = res.data;
          const smurfsObj = {
            smurfs: fetchedSmurfs,
          };
          dispatch({ type: DATA_SUCCESS, payload: smurfsObj });
        })
        .catch((err) => dispatch({ type: DATA_ERROR, payload: err }));
    }, 10);
  };
};
