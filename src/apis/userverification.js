import axios from "axios";

// export const getJWTtoken = async (serverURL, username, password) => {
//   let queryObj = {
//     username: username,
//     password: password,
//   };
//   let output = await axios.post(serverURL, queryObj);
//   console.log(output);
//   return output;
// };

export const enterPatientDetails = async (serverURL, token, patientdetails) => {
  let data = {
    message: "",
    statuscode: "",
    outdata: {},
  };
  serverURL = process.env.REACT_APP_CreatePatient;
  const config = {
    headers: {
      tokendata: token,
    },
  };
  try {
    let output = await axios.post(serverURL, patientdetails, config);
    // console.log(output);
    data.outdata = output.data;
    data.statuscode = output.status;
  } catch (error) {
    data.message = error;
    try {
      data.statuscode = error.response.status;
    } catch (error) {
      data.statuscode = 500;
    }
  }
  return data;
};
export const enterVisitingDetails = async (
  serverURL,
  token,
  visitingdetails
) => {
  let data = {
    message: "",
    statuscode: "",
    outdata: {},
  };
  serverURL = process.env.REACT_APP_CreateVisit;
  const config = {
    headers: {
      tokendata: token,
    },
  };
  try {
    let output = await axios.post(serverURL, visitingdetails, config);
    console.log(output);
    data.outdata = output.data;
    data.statuscode = output.status;
  } catch (error) {
    console.log(error);
    data.message = error;
    try {
      data.statuscode = error.response.status;
    } catch (error) {
      data.statuscode = 500;
    }
  }
  return data;
};
export const searchPatientDetails = async (
  serverURL,
  patientid,
  phonenumber,
  token
) => {
  serverURL = process.env.REACT_APP_SearchPatient;
  console.log("patientid", patientid);
  console.log("phonenumber", phonenumber);
  serverURL = serverURL
    .replaceAll("[patientid]", patientid)
    .replaceAll("[phone]", phonenumber);
  const config = {
    headers: {
      tokendata: token,
    },
  };
  let data = {
    message: "",
    statuscode: "",
    outdata: {},
  };

  try {
    let output = await axios.get(serverURL, config);
    console.log(output);
    data.outdata = output.data;
    data.statuscode = output.status;
  } catch (error) {
    data.message = error;
    try {
      data.statuscode = error.response.status;
    } catch (error) {
      data.statuscode = 500;
    }
  }
  return data;
};
