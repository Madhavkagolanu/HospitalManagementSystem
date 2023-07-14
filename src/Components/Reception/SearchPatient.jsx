import React from "react";
import { Con } from "../../Config/Configure";
import FormDetails from "../FormDetails";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import "../../Pages/Reception/Reception.css";
import { toastErrorStatus, toastSuccessStatus } from "../sendToast";
import { searchPatientDetails } from "../../apis/userverification";
import { useTokenStore } from "../../store/store";

import { useUsernameStore } from "../../store/store";
import { usePasswordStore } from "../../store/store";
var _ = require("lodash");

const SearchPatient = () => {
  // console.log("searchpatient");
  const InputFields = Con.Reception.Search.InputFields;
  const token = useTokenStore((state) => state.token.token);
  const setToken = useTokenStore((state) => state.setToken);
  const fetchnewToken = useTokenStore((state) => state.fetchnewToken);
  const username = useUsernameStore((state) => state.username);
  const password = usePasswordStore((state) => state.password);
  const [patientid, setpatientid] = useState("");
  const [patientmobile, setpatientmobile] = useState("");

  const resetForm = () => {
    setpatientid("");
    setpatientmobile("");
  };
  const searchPatient = async () => {
    console.log(process.env.REACT_APP_SearchPatient, patientid, patientmobile);
    let searchdata = await searchPatientDetails(
      process.env.REACT_APP_SearchPatient,
      patientid,
      patientmobile,
      token
    );
    console.log(searchdata.outdata.data);
    switch (searchdata.statuscode) {
      case 200:
        if (searchdata.outdata.data.length <= 0) {
          toastErrorStatus("No Patient Found!!");
          break;
        }
        toastSuccessStatus("Patient details found!!");
        break;
      case 400:
        toastErrorStatus("No details Entered!!");
        break;
      case 401:
        await fetchnewToken(
          process.env.REACT_APP_GetTokenURL,
          username,
          password
        );
        if (token.statuscode == 401) {
          setToken("");
          toastErrorStatus("UnAuthorised Access. Login Again!!");
          break;
        }
        searchPatient();
        break;
      default:
        toastErrorStatus("Something went wrong. Try Again!!");
        break;
    }
  };

  return (
    <div>
      {" "}
      <h1 className="NPR">Patient Search</h1>
      <div className="Rece-flex-container">
        <div className="container-right">
          <div className="patientDet">
            {" "}
            <div className="fieldRow">
              <span className="patHeading">Patient ID</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp"
                placeholder="Patient ID"
                value={patientid}
                onChange={(e) => {
                  setpatientid(e.target.value);
                  // setsearchDoc(e.target.value);
                }}
              />{" "}
              {/* <span
                className="refreshicon iconstyle"
                onClick={(e) => {
                  console.log("refresh");
                }}
              >
                <BsSearch />
              </span> */}
            </div>
            <FormDetails InputFields={InputFields} />{" "}
            <div className="fieldRow">
              <span className="patHeading">Mobile No.</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp"
                placeholder="Mobile No."
                value={patientmobile}
                onChange={(e) => {
                  setpatientmobile(e.target.value);
                  // setsearchDoc(e.target.value);
                }}
              />{" "}
              {/* <span
                className="refreshicon iconstyle"
                onClick={(e) => {
                  console.log("refresh");
                }}
              >
                <BsSearch />
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="buttondiv">
        <button className="button-6 savesubmit" onClick={resetForm}>
          Reset
        </button>
        <button className="button-6 savesubmit" onClick={searchPatient}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPatient;
