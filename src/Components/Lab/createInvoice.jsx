import React from "react";
import { useState } from "react";
import FormDetails from "../../Components/FormDetails";
import { FiRefreshCcw } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { Con } from "../../Config/Configure";

function CreateInvoice() {
  const [searchDoc, setsearchDoc] = useState("");
  const InputFields = Con.Lab.createInvoice.InputFields;
  return (
    <div>
      {" "}
      <h1 className="NPR">CREATE LAB INVOICE </h1>
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
            <FormDetails InputFields={InputFields} />
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
              />{" "}
              <span
                className="refreshicon iconstyle"
                onClick={(e) => {
                  console.log("refresh");
                }}
              >
                <FiRefreshCcw />
              </span>
            </div>
            <div className="fieldRow">
              <span className="patHeading">Lab Item</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp"
                placeholder="Lab Item"
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
                <FiRefreshCcw />
              </span>
            </div>
            <div className="fieldRow">
              <span className="patHeading">Payment Type</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp"
                placeholder="Payment Type"
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
                <FiRefreshCcw />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="buttondiv">
        <button class="button-6 savesubmit" role="button">
          ADD
        </button>
        <button class="button-6 savesubmit" role="button">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default CreateInvoice;
