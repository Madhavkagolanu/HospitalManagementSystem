import React from "react";
import "../Reception/Reception.css";
import SideBar from "../../Components/Sidebar";
import FormDetails from "../../Components/FormDetails";
function Reception() {
  const SideBarInfo1 = {
    imgURL: "https://rudrajyotinathray.files.wordpress.com/2022/04/g.jpeg",
    Title: "Laborotory",
  };
  const SideBarInfo2 = {
    createinvoice: "CREATE INVOICE",
    createcatalogitem: "CREATE CATALOG ITEM",
  };
  const InputFields=[["LAB ITEM NAME",1,"text"],["MRP",1,"text"]];
  return (
    <div>
      {" "}
      <h1 className="NPR">CREATE LAB INVOICE VISIT</h1>
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
