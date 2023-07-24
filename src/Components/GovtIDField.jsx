import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useIPDetailsStore } from "../store/store";
import DropDownElement from "./DropDownElement";

const GovtIDField = ({ triggertoggle, setTriggertoggle }) => {
  const [resetDropdown, setresetDropdown] = useState(true);
  const setippatientgovtidtype = useIPDetailsStore(
    (state) => state.setippatientgovtidtype
  );
  const govttypeid = useIPDetailsStore(
    (state) => state.ippatientdetails.govttypeid
  );
  const setippatientgovtidvalue = useIPDetailsStore(
    (state) => state.setippatientgovtidvalue
  );
  const govtidvalue = useIPDetailsStore(
    (state) => state.ippatientdetails.govtidvalue
  );
  // const [govtidvalue, setgovtidvalue] = useState("");

  // useEffect(() => {
  //   setSelectedOption("");
  //   setgovtidvalue("");
  //   console.log(resetDropdown);
  //   setresetDropdown(!resetDropdown);
  // }, [triggerreset]);
  const x = [
    {
      value: "Aadhar",
      label: "Aadhar",
    },
    {
      value: "PAN",
      label: "PAN",
    },
    {
      value: "DL",
      label: "DL",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];
  return (
    <div className="fieldRow">
      <span className="patHeading">Govt. ID</span>
      <span className="star">*</span>
      {/* {manualEntryTrigger ? ( */}
      {/*      
      ) : ( */}
      <DropDownElement
        resetDropdown={resetDropdown}
        newddlist={x}
        setSelectedOption={setippatientgovtidtype}
        selectedoption={govttypeid}
      />

      <input
        type="text"
        className="RecInp dropdowncontainer"
        placeholder="ID"
        value={govtidvalue.toUpperCase()}
        onChange={(e) => {
          setippatientgovtidvalue(e.target.value);
        }}
      />
      {/*         
      )} */}
      <span className="refreshicon iconstyle">
        <span
          className="refreshbutton iconstyle"
          onClick={(e) => {
            // console.log("refresh");
            e.preventDefault();
            e.stopPropagation();
            setTriggertoggle(!triggertoggle);
          }}
        >
          <FiRefreshCcw />
          <span>Refresh</span>
        </span>
        {/* 
        <div className="refreshbutton iconstyle">
          <input
            type="checkbox"
            defaultChecked={manualEntryTrigger}
            id="ManualEntry"
            onChange={(e) => {
              console.log(e.target.checked);
              setSelectedOption("");
              setsearchDoc("");
              setmanualEntryTrigger(e.target.checked);
            }}
          />
          <label htmlFor="ManualEntry">Manual Entry</label>
        </div> */}
      </span>
    </div>
  );
};

export default GovtIDField;
