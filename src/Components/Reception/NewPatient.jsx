import React, { useEffect } from "react";
import { FillPatientData } from "../../Logic/FormatData";
import { toastSuccessStatus, toastErrorStatus } from "../sendToast";
import { patientdetailsvalidation } from "../../Logic/Validators";
import { useState } from "react";
// import { enterPatientDetails } from "../../apis/userverification";
import "../../Pages/Reception/Reception.css";
import ConsultingDoctor from "../ConsultingDoctor";
import { useTokenStore } from "../../store/store";
import { useUsernameStore } from "../../store/store";
import { usePasswordStore } from "../../store/store";
import {
  NameField,
  Dob,
  Sex,
  EmailField,
  Mobile,
  Altmobile,
  Landline,
  Amount,
  PaymentType,
} from "../Fields";

const NewPatient = ({ newddlist, triggertoggle, setTriggertoggle }) => {
  const token = useTokenStore((state) => state.token.token);
  const setToken = useTokenStore((state) => state.setToken);
  const fetchnewToken = useTokenStore((state) => state.fetchnewToken);
  const username = useUsernameStore((state) => state.username);
  const password = usePasswordStore((state) => state.password);
  const [searchDoc, setsearchDoc] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [patientdetails, setpatientdetails] = useState({});

  useEffect(() => {
    console.log("selected option effect triggered");
    setpatientdetails((prevState) => ({
      patientdetails: {
        ...prevState.patientdetails,
        consultingdoctor: selectedOption,
      },
    }));
  }, [selectedOption]);

  useEffect(() => {
    console.log("search doc effect triggered");
    setpatientdetails((prevState) => ({
      patientdetails: {
        ...prevState.patientdetails,
        consultingdoctor: searchDoc,
      },
    }));
  }, [searchDoc]);

  const callValidationAndSubmit = async () => {
    console.log(patientdetails.patientdetails);
    if (patientdetailsvalidation(patientdetails.patientdetails)) {
      let createdata = await FillPatientData(
        patientdetails.patientdetails,
        token
      );
      switch (createdata.statuscode) {
        case 200:
          toastSuccessStatus("Patient Registered Successfully!!");
          console.log(createdata.outdata.id);
          break;
        case 400:
          toastErrorStatus("Missing Details!!");
          break;
        case 401:
          await fetchnewToken(
            process.env.REACT_APP_GetTokenURL,
            username,
            password
          );
          if (token.statuscode == 401) {
            setToken("");
            toastErrorStatus("UnAuthorised Access. Login Again!!");
            break;
          }
          callValidationAndSubmit();
          break;
        default:
          toastErrorStatus("Something went wrong. Try Again!!");
          break;
      }
    } else toastErrorStatus("Incomplete Details");
  };

  return (
    <div>
      <h1 className="NPR">New Patient Registration</h1>
      <div className="Rece-flex-container">
        <div className="container-right">
          <div className="patientDet">
            {/* <FormDetails InputFields={InputFields} /> */}
            <NameField setpatientdetails={setpatientdetails} />
            <Dob setpatientdetails={setpatientdetails} />
            <Sex setpatientdetails={setpatientdetails} />
            <EmailField setpatientdetails={setpatientdetails} />
            <Mobile setpatientdetails={setpatientdetails} />
            <Altmobile setpatientdetails={setpatientdetails} />
            <Landline setpatientdetails={setpatientdetails} />
            <ConsultingDoctor
              searchDoc={searchDoc}
              setsearchDoc={setsearchDoc}
              setSelectedOption={setSelectedOption}
              newddlist={newddlist}
              triggertoggle={triggertoggle}
              setTriggertoggle={setTriggertoggle}
            />
            <Amount setpatientdetails={setpatientdetails} />
            <PaymentType setpatientdetails={setpatientdetails} />
          </div>
        </div>
      </div>
      <div className="buttondiv">
        <button
          className="button-6 savesubmit"
          onClick={() => {
            console.log("save triggered");
          }}
        >
          Save
        </button>
        <button
          className="button-6 savesubmit"
          onClick={() => {
            // enterPatientDetails(
            //   process.env.REACT_APP_CreatePatient,
            //   patientdetails
            // );
            callValidationAndSubmit();
            console.log(patientdetails);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewPatient;
