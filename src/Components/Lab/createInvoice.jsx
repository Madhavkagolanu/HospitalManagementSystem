import React from "react";
import FormDetails from "../../Components/FormDetails";
import { Con } from "../../Config/Configure";
function CreateInvoice() {
  const InputFields = Con.Lab.createInvoice.InputFields;
  return (
    <div>
      {" "}
      <h1 className="NPR">CREATE LAB INVOICE </h1>
      <div class="Rece-flex-container">
        <div class="Rece-flex-item-right">
          <FormDetails InputFields={InputFields} />
        </div>
      </div>
      {/* <button class="button-17 savesubmit" role="button">
        ADD
      </button>
      <button class="button-17 savesubmit" role="button">
        SUBMIT
      </button> */}
    </div>
  );
}

export default CreateInvoice;
