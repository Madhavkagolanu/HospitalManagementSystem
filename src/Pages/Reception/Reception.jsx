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
  const InputFields=[["NAME",1,"text"],["DATE",1,"date"],["SEX",1,"text"],["MOBILE NUMBER",1,"text"],["ALT. MOBILE NUMBER",0,"text"],["EMAIL ID",0,"email"],['CONST. DOCTOR',1,'text'],["AMOUNT PAYABLE",1,"number"],["TRANSACTION ID",1,"text"]];
  return (
    <div>
      {" "}
      <h1 className="NPR">NEW PATIENT REGISTRATION</h1>
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
        SAVE
      </button>
      <button class="button-17 savesubmit" role="button">
        SUBMIT
      </button>
    </div>
  );
}

export default Reception;
