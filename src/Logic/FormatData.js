import { enterPatientDetails } from "../apis/userverification";
import { v4 } from "uuid";

export const FillPatientData = async (formdata, token) => {
  let patientDetailsTemplate = {
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

  console.log(v4());
  patientDetailsTemplate.requestid = v4();
  patientDetailsTemplate.name = formdata.namevalue;
  patientDetailsTemplate.dob = formdata.dob;
  patientDetailsTemplate.sex = formdata.sex;
  patientDetailsTemplate.emailid =
    "emailid" in formdata ? formdata.emailid : "";
  patientDetailsTemplate.mobile = formdata.mobile;
  patientDetailsTemplate.altmobile =
    "altmobile" in formdata ? formdata.altmobile : "";
  patientDetailsTemplate.landline =
    "landline" in formdata ? formdata.landline : "";
  patientDetailsTemplate.consultingdoctor = formdata.consultingdoctor;
  patientDetailsTemplate.visitingcharges = formdata.visitingcharges;
  patientDetailsTemplate.transactionid = formdata.transactionid;

  console.log(patientDetailsTemplate);
  //Call API
  let createpatientoutput = await enterPatientDetails(
    process.env.REACT_APP_CreatePatient,
    token,
    patientDetailsTemplate
  );
  return createpatientoutput;
};
