import React from "react";
import { Con } from "../../Config/Configure";
import FormDetails from "../FormDetails";
import { BsSearch } from "react-icons/bs";
import "../../Pages/Reception/Reception.css";

const SearchPatient = () => {
  // console.log("searchpatient");
  const InputFields = Con.Reception.Search.InputFields;

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
                onChange={(e) => {
                  // setsearchDoc(e.target.value);
                }}
              />{" "}
              <span
                className="refreshicon iconstyle"
                onClick={(e) => {
                  console.log("refresh");
                }}
              >
                <BsSearch />
              </span>
            </div>
            <FormDetails InputFields={InputFields} />{" "}
            <div className="fieldRow">
              <span className="patHeading">Mobile No.</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp"
                placeholder="Mobile No."
                onChange={(e) => {
                  // setsearchDoc(e.target.value);
                }}
              />{" "}
              <span
                className="refreshicon iconstyle"
                onClick={(e) => {
                  console.log("refresh");
                }}
              >
                <BsSearch />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="buttondiv">
        <button className="button-6 savesubmit" role="button">
          RESET
        </button>
        <button className="button-6 savesubmit" role="button">
          ADD VISIT
        </button>
      </div>
    </div>
  );
};

export default SearchPatient;
