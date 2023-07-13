import axios from "axios";
import uuid4 from "uuid4";

export const getJWTtoken = async (serverURL, username, password) => {
  let queryObj = {
    username: username,
    password: password,
  };
  let output = await axios.post(serverURL, queryObj);
  console.log(output);
  return output;
};

export const enterPatientDetails = async (serverURL, patientdetails) => {
  let request_id = uuid4();
  patientdetails.request_id = request_id;
  let output = await axios.post(serverURL, patientdetails);
  return output;
};
