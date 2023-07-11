import React from "react";
import "./Reception.css";
import SideBar from "../../Components/Sidebar";
import FormDetails from "../../Components/FormDetails";
function Reception() {
  const SideBarInfo1 = {
    imgURL: "https://rudrajyotinathray.files.wordpress.com/2022/04/g.jpeg",
    Title: "Reception",
  };
  const SideBarInfo2 = {
    reception: "Registration",
    search: "Search",
    createvisit: "Create Visit",
  };
  const InputFields=[["PATIENT ID",1,"text"],["CONST. DOCTOR",1,"text"],["VISITING CHARGES",1,"number"],["TRANSACTION ID",1,"text"]];
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
