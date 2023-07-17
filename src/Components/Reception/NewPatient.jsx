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
import { CardDisplay } from "../CardDisplay";

const NewPatient = ({ newddlist, triggertoggle, setTriggertoggle }) => {
  const carddatatemplate = {};

  const token = useTokenStore((state) => state.token.token);
  const statuscode = useTokenStore((state) => state.token.statuscode);
  const setToken = useTokenStore((state) => state.setToken);
  const fetchnewToken = useTokenStore((state) => state.fetchnewToken);
  const username = useUsernameStore((state) => state.username);
  const password = usePasswordStore((state) => state.password);

  const [searchDoc, setsearchDoc] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [patientdetails, setpatientdetails] = useState({});
  const [carddetails, setcarddetails] = useState({});
  const [retriggersubmit, setretriggersubmit] = useState(false);
  const [triggerreset, settriggerreset] = useState(false);

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

  useEffect(() => {
    if (retriggersubmit) {
      callValidationAndSubmit();
      setretriggersubmit(false);
    }
  }, [retriggersubmit]);

  const callValidationAndSubmit = async () => {
    console.log("Captured Data");
    console.log(patientdetails.patientdetails);
    if (patientdetailsvalidation(patientdetails.patientdetails)) {
      let createdata = await FillPatientData(
        patientdetails.patientdetails,
        token
      );
      switch (createdata.statuscode) {
        case 200:
          if (createdata.outdata.created) {
            toastSuccessStatus("Patient Registered Successfully!!");
            console.log("Patient ID: ", createdata.outdata.id);
            carddatatemplate.patientid = createdata.outdata.id;
            carddatatemplate.patientname =
              patientdetails.patientdetails.namevalue;
            carddatatemplate.patientdob = patientdetails.patientdetails.dob;
            carddatatemplate.mobilenum = patientdetails.patientdetails.mobile;
            carddatatemplate.consultingdoctor =
              patientdetails.patientdetails.consultingdoctor;
            setcarddetails(carddatatemplate);
          } else {
            resetform();
            toastErrorStatus("Something went wrong. Try Again!!");
            break;
          }
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
          if (statuscode == 401) {
            setToken("");
            toastErrorStatus("UnAuthorised Access. Login Again!!");
            break;
          }
          setretriggersubmit(true);
          break;
        default:
          resetform();
          toastErrorStatus("Something went wrong. Try Again!!");
          break;
      }
    } else toastErrorStatus("Incomplete Details");
  };

  const resetform = () => {
    console.log("Reset triggered");
    settriggerreset(!triggerreset);
    setcarddetails({});
  };

  return (
    <>
      <h1 className="NPR">New Patient Registration</h1>
      <div className="Rece-flex-container">
        <div className="container-right">
          <div className="patientDet">
            {/* <FormDetails InputFields={InputFields} /> */}
            <NameField
              setpatientdetails={setpatientdetails}
              triggerreset={triggerreset}
              disabled={false}
              externalvalue={""}
            />
            <Dob
              setpatientdetails={setpatientdetails}
              triggerreset={triggerreset}
            />
            <Sex
              setpatientdetails={setpatientdetails}
              triggerreset={triggerreset}
            />
            <EmailField
              setpatientdetails={setpatientdetails}
              triggerreset={triggerreset}
            />
            <Mobile
              setpatientdetails={setpatientdetails}
              triggerreset={triggerreset}
            />
            <Altmobile
              setpatientdetails={setpatientdetails}
              triggerreset={triggerreset}
            />
            <Landline
              setpatientdetails={setpatientdetails}
              triggerreset={triggerreset}
            />
            <ConsultingDoctor
              searchDoc={searchDoc}
              setsearchDoc={setsearchDoc}
              setSelectedOption={setSelectedOption}
              newddlist={newddlist}
              triggertoggle={triggertoggle}
              triggerreset={triggerreset}
              setTriggertoggle={setTriggertoggle}
            />
            <Amount
              setpatientdetails={setpatientdetails}
              triggerreset={triggerreset}
            />
            <PaymentType
              setpatientdetails={setpatientdetails}
              triggerreset={triggerreset}
            />
          </div>
        </div>
      </div>
      <div className="buttondiv">
        <button
          className="button-6 savesubmit"
          onClick={() => {
            // enterPatientDetails(
            //   process.env.REACT_APP_CreatePatient,
            //   patientdetails
            // );
            callValidationAndSubmit();
          }}
        >
          Submit
        </button>
        <button className="button-6 savesubmit" onClick={resetform}>
          Reset
        </button>
      </div>
      <CardDisplay
        key={1}
        data={carddetails}
        CardHeader={"Patient Registered Details"}
        displayprintbutton={true}
        displayradiobutton={false}
        displaykey={1}
        setvisitingpatientid={() => {}}
        setcardkey={() => {}}
        cardkey={""}
        displayheader={true}
      />
    </>
  );
};

export default NewPatient;
