import axios from "axios";

export const getJWTtoken = async (serverURL, username, password) => {
  let queryObj = {
    username: username,
    password: password,
  };
  let output = await axios.post(serverURL, queryObj);
  console.log(output);
  return output;
};

export const getPatientDetails = async (serverURL, username, password) => {
  let queryObj = {
    username: username,
    password: password,
  };
  let output = await axios.post(serverURL, queryObj);
  return output;
};
