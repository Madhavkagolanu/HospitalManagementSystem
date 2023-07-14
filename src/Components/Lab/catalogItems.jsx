import React from "react";
import FormDetails from "../FormDetails";
import { Con } from "../../Config/Configure";
function CatalogItems() {
  const InputFields = Con.Lab.catalogItems.InputFields;
  return (
    <div>
      {" "}
      <h1 className="NPR">CREATE LAB INVOICE</h1>
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

export default CatalogItems;
