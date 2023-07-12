import React from "react";
import { Con } from "../../Config/Configure";
import FormDetails from "../FormDetails";

const CreateVisit = () => {
  // console.log("createvisit");

  const InputFields = Con.Reception.CreateVisit.InputFields;
  return (
    <div>
      {" "}
      <h1 className="NPR">OLD PATIENT VISIT</h1>
      <div className="Rece-flex-container">
        <div className="Rece-flex-item-right">
          <FormDetails InputFields={InputFields} />
        </div>
      </div>
      <button className="button-17 savesubmit" role="button">
        RESET
      </button>
      <button className="button-17 savesubmit" role="button">
        CREATE VISIT
      </button>
    </div>
  );
};

export default CreateVisit;
