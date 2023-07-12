import React from "react";
import "./Reception.css";
import SideBar from "../../Components/Sidebar";
import FormDetails from "../../Components/FormDetails";
import {Con} from '../../Config/Configure'
function Reception() {
  const SideBarInfo1 = Con.CreateVisit.SideBarInfo1;
  const SideBarInfo2 = Con.CreateVisit.SideBarInfo2;
  const InputFields=Con.CreateVisit.InputFields;
  return (
    <div>
      {" "}
      <h1 className="NPR">OLD PATIENT VISIT</h1>
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
        RESET
      </button>
      <button class="button-17 savesubmit" role="button">
        CREATE VISIT
      </button>
    </div>
  );
}

export default Reception;
