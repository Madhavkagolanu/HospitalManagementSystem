import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useIPDetailsStore } from "../store/store";
import DropDownElement from "./DropDownElement";


const DeptID = ({
  searchDoc,
  setsearchDoc,
  newddlist,
  setSelectedOption,
  triggertoggle,
  setTriggertoggle,
  triggerreset,
}) => {
  const [manualEntryTrigger, setmanualEntryTrigger] = useState(false);
  const [resetDropdown, setresetDropdown] = useState(true);

  const setippatientdeptid= useIPDetailsStore(
    (state) => state.setippatientdeptid
  );
  const deptid = useIPDetailsStore(
    (state) => state.ippatientdetails.deptid
  );
  useEffect(() => {
    setSelectedOption("");
    setsearchDoc("");
    console.log(resetDropdown);
    setresetDropdown(!resetDropdown);
  }, [triggerreset]);
  const x=[{
    value:'GYNIC',
    label:'GYNIC',
    
  },
  {
    value:'Cardiac',
    label:'CARDIAC',
    
  }]
  return (
    <div className="fieldRow">
      <span className="patHeading">DEPARTMENT</span>
      <span className="star">*</span>
      {/* {manualEntryTrigger ? ( */}
{/*      
      ) : ( */}
        <DropDownElement
          resetDropdown={resetDropdown}
          newddlist={x}
          setSelectedOption={setippatientdeptid}
          selectedoption={deptid}
        />
      
           {/* <input
          type="text"
          className="RecInp dropdowncontainer"
          placeholder="Consulting Doctor"
          value={searchDoc.toUpperCase()}
          onChange={(e) => {
            setsearchDoc(e.target.value);
          }}
        /> */}
{/*         
      )} */}
      <span className="refreshicon iconstyle">
        {/* <span
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
        </span> */}
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

export default DeptID;
