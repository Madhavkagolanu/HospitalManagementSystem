import React from "react";
import "../Reception/Reception.css";
import SideBar from "../../Components/Sidebar";
import FormDetails from "../../Components/FormDetails";
import {Con} from '../../Config/Configure'
function Reception() {
  const SideBarInfo1 = Con.createInvoice.SideBarInfo1;
  const SideBarInfo2 = Con.createInvoice.SideBarInfo2;
  const InputFields=Con.createInvoice.InputFields;
  return (
    <div>
      {" "}
      <h1 className="NPR">CREATE LAB INVOICE </h1>
      <div class="Rece-flex-container">
        <div class="Rece-flex-item-left">
          <SideBar Info1={SideBarInfo1} Info2={SideBarInfo2} />
        </div>
        <div class="Rece-flex-item-right">
          <FormDetails InputFields={InputFields}/>
        </div>
      </div>
      <button class="button-17 logout" role="button">
        Logout
      </button>
      <button class="button-17 savesubmit" role="button">
        ADD
      </button>
      <button class="button-17 savesubmit" role="button">
        SUBMIT
      </button>
    </div>
  );
}

export default Reception;
