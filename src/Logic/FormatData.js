import {
  enterPatientDetails,
  enterVisitingDetails,
} from "../apis/userverification";
import { v4 } from "uuid";
import {
  patientDetailsTemplate,
  visitingdetailstemplate,
} from "../models/templatemodels";

export const FillPatientData = async (formdata, token) => {
  console.log(formdata);
  console.log(token);
  let patientDetailsTemplatelocal = {
    name: "",
    dob: "",
    sex: "",
    emailid: "",
    mobile: "",
    altmobile: "",
    landline: "",
    consultingdoctor: "",
    visitingcharges: 0,
    transactionid: "",
    requestid: "",
  };
  // Object.assign(patientDetailsTemplatelocal, patientDetailsTemplate);

  // console.log(v4());
  patientDetailsTemplatelocal.requestid = v4();
  patientDetailsTemplatelocal.name = formdata.namevalue;
  patientDetailsTemplatelocal.dob = formdata.dob;
  patientDetailsTemplatelocal.sex = formdata.sex;
  patientDetailsTemplatelocal.emailid =
    "emailid" in formdata ? formdata.emailid : "";
  patientDetailsTemplatelocal.mobile = formdata.mobile;
  patientDetailsTemplatelocal.altmobile =
    "altmobile" in formdata ? formdata.altmobile : "";
  patientDetailsTemplatelocal.landline =
    "landline" in formdata ? formdata.landline : "";
  patientDetailsTemplatelocal.consultingdoctor = formdata.consultingdoctor;
  patientDetailsTemplatelocal.visitingcharges = formdata.visitingcharges;
  patientDetailsTemplatelocal.transactionid = formdata.transactionid;

  console.log(patientDetailsTemplatelocal);
  //Call API
  let createpatientoutput = await enterPatientDetails(
    process.env.REACT_APP_CreatePatient,
    token,
    patientDetailsTemplatelocal
  );
  return createpatientoutput;
};

export const FillVisitingData = async (formdata, token) => {
  // console.log(formdata);
  let visitingdetailstemplatelocal = {
    patientid: "",
    consultingdoctor: "",
    visitingcharges: 0,
    transactionid: "",
  };
  // Object.assign(visitingdetailstemplatelocal, visitingdetailstemplate);

  visitingdetailstemplatelocal.patientid = formdata.patientid;
  visitingdetailstemplatelocal.consultingdoctor = formdata.consultingdoctor;
  visitingdetailstemplatelocal.visitingcharges = formdata.visitingcharges;
  visitingdetailstemplatelocal.transactionid = formdata.transactionid;

  console.log(visitingdetailstemplatelocal);

  //Call API
  let createvisitingoutput = await enterVisitingDetails(
    process.env.REACT_APP_CreateVisit,
    token,
    visitingdetailstemplatelocal
  );

  return createvisitingoutput;
};
