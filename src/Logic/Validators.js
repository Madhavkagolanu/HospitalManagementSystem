var _ = require("lodash");

export const patientdetailsvalidation = (formdata) => {
  // validate name
  if (validate("namevalue", "namevalue", formdata)) return false;
  // validate dob
  if (validate("dob", "dob", formdata)) return false;
  // validate sex
  if (validate("sex", "sex", formdata)) return false;
  // // validate emailid
  // if(validate("formdata.emailid", "emailid", formdata)) return false;
  // validate mobile
  if (validate("mobile", "mobile", formdata)) return false;
  // // validate altmobile
  // if(validate("formdata.altmobile", "altmobile", formdata)) return false;
  // // validate landline
  // if(validate("formdata.landline", "namevalue", formdata)) return false;
  // validate name
  if (validate("consultingdoctor", "consultingdoctor", formdata)) return false;
  // validate name
  if (validate("visitingcharges", "visitingcharges", formdata)) return false;
  // validate name
  if (validate("transactionid", "transactionid", formdata)) return false;

  console.log("All Validations clear ");
  return true;
};

const validate = (fieldpath, fieldname, formdata) => {
  if (fieldname in formdata) {
    if (_.isEmpty(_.get(formdata, fieldpath, ""))) {
      console.log("is empty ", fieldpath, fieldname);
      return true;
    }
    return false;
  } else {
    console.log("no field ", fieldpath, fieldname);

    return true;
  }
};

export const searchpatientvalidation = (patientid, phonenumber) => {
  if (_.isEmpty(patientid) || _.isUndefined(patientid)) {
    if (_.isEmpty(phonenumber)) {
      return false;
    }
  }
  return true;
};

export const visitingdetailsvalidation = (formdata) => {
  // validate name
  if (validate("patientid", "patientid", formdata)) return false;
  // validate consultingdoctor
  if (validate("consultingdoctor", "consultingdoctor", formdata)) return false;
  // validate visitingcharges
  if (validate("visitingcharges", "visitingcharges", formdata)) return false;

  console.log("All Validations clear ");
  return true;
};
