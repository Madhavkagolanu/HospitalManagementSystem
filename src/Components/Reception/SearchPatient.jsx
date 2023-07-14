import React from "react";
import { Con } from "../../Config/Configure";
import FormDetails from "../FormDetails";
const SearchPatient = () => {
  // console.log("searchpatient");
  const InputFields = Con.Reception.Search.InputFields;

  return (
    <div>
      {" "}
      <h1 className="NPR">OLD PATIENT REGISTRATION</h1>
      <div className="Rece-flex-container">
        <div className="Rece-flex-item-right">
          <FormDetails InputFields={InputFields} />
        </div>
      </div>
      {/* <button className="button-17 savesubmit" role="button">
        RESET
      </button>
      <button className="button-17 savesubmit" role="button">
        ADD VISIT
      </button> */}
    </div>
  );
};

export default SearchPatient;
