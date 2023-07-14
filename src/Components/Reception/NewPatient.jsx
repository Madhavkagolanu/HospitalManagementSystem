import React from "react";
import { Con } from "../../Config/Configure";
import FormDetails from "../FormDetails";

const NewPatient = () => {
  // console.log("newpatients");

  const InputFields = Con.Reception.newPatient.InputFields;
  return (
    <div>
      {" "}
      <h1 className="NPR">OLD PATIENT VISIT</h1>
      <div className="Rece-flex-container">
        <div className="Rece-flex-item-right">
          <FormDetails InputFields={InputFields} />
        </div>
      </div>
      {/* <button className="button-17 savesubmit" role="button">
        Save
      </button>
      <button className="button-17 savesubmit" role="button">
        Submit
      </button> */}
    </div>
  );
};

export default NewPatient;
