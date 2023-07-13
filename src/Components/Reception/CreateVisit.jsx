import React from "react";
import { Con } from "../../Config/Configure";
import FormDetails from "../FormDetails";
import { BsSearch } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { useState } from "react";

const CreateVisit = () => {
  // console.log("createvisit");
  const [searchDoc, setsearchDoc] = useState("");
  const [outlist, setoutlist] = useState([]);
  const InputFields = Con.Reception.CreateVisit.InputFields;
  return (
    <div>
      {" "}
      <h1 className="NPR">Patient Visit Create</h1>
      <div className="Rece-flex-container">
        <div className="container-right">
          <div className="patientDet">
            <div className="fieldRow">
              <span className="patHeading">Patient ID</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp"
                placeholder="Patient ID"
                onChange={(e) => {
                  setsearchDoc(e.target.value);
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
            <div className="fieldRow">
              <span className="patHeading">Consulting Doctor</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp"
                placeholder="Consulting Doctor"
                onChange={(e) => {
                  setsearchDoc(e.target.value);
                }}
              />
              <span className="refreshicon iconstyle">
                <FiRefreshCcw style={{ height: "18px", width: "18px" }} />
              </span>
            </div>
            <div className="fieldRow">
              <span className="patHeading">Amount Payable</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp"
                placeholder="Amount Payable"
                onChange={(e) => {
                  setsearchDoc(e.target.value);
                }}
              />
              <span className="refreshicon"></span>
            </div>
            <FormDetails InputFields={InputFields} />{" "}
          </div>
        </div>
      </div>
      <div className="buttondiv">
        <button className="button-6 savesubmit" role="button">
          RESET
        </button>
        <button className="button-6 savesubmit" role="button">
          CREATE VISIT
        </button>
      </div>
    </div>
  );
};

export default CreateVisit;
