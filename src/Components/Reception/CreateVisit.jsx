import React from "react";
import { Con } from "../../Config/Configure";
import FormDetails from "../FormDetails";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import ConsultingDoctor from "../ConsultingDoctor";
import { searchPatientDetails } from "../../apis/userverification";
import { useTokenStore } from "../../store/store";
import { useUsernameStore } from "../../store/store";
import { toastSuccessStatus, toastErrorStatus } from "../sendToast";
import { usePasswordStore } from "../../store/store";
import { PaymentType, PatientID } from "../Fields";
import { FillPatientData } from "../../Logic/FormatData";
import { searchpatientvalidation } from "../../Logic/Validators";

const CreateVisit = ({ newddlist, triggertoggle, setTriggertoggle }) => {
  // console.log("createvisit");
  // const [searchDoc, setsearchDoc] = useState("");
  // // const [outlist, setoutlist] = useState([]);
  // const visitingrecord = {
  //   patientid: "",
  //   consultingdoctor: "",
  //   visitingcharges: 0,
  //   transactionid: "",
  // };
  const token = useTokenStore((state) => state.token.token);
  const setToken = useTokenStore((state) => state.setToken);
  const fetchnewToken = useTokenStore((state) => state.fetchnewToken);
  const username = useUsernameStore((state) => state.username);
  const password = usePasswordStore((state) => state.password);
  const [searchDoc, setsearchDoc] = useState("");
  const [patientid, setpatientid] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [patientdetails, setpatientdetails] = useState({});

  const InputFields = Con.Reception.CreateVisit.InputFields;

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

  const resetForm = () => {
    setpatientid("");
  };

  const searchPatient = async () => {
    console.log(process.env.REACT_APP_SearchPatient, patientid);
    if (searchpatientvalidation(patientid, "")) {
      let searchdata = await searchPatientDetails(
        process.env.REACT_APP_SearchPatient,
        patientid,
        "",
        token
      );
      console.log(searchdata);
      switch (searchdata.statuscode) {
        case 200:
          if (searchdata.outdata.data.length <= 0) {
            toastErrorStatus("No Patient Found!!");
            break;
          }
          toastSuccessStatus("Patient details found!!");
          break;
        case 400:
          toastErrorStatus("No details Entered!!");
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
          searchPatient();
          break;
        default:
          toastErrorStatus("Something went wrong. Try Again!!");
          break;
      }
    } else toastErrorStatus("Incomplete Details");
  };

  const callValidationAndSubmit = async () => {
    console.log(patientdetails.patientdetails);
    // if (patientdetailsvalidation(patientdetails.patientdetails)) {
    //   let createdata = await FillPatientData(
    //     patientdetails.patientdetails,
    //     token
    //   );
    //   switch (createdata.statuscode) {
    //     case 200:
    //       toastSuccessStatus("Patient Registered Successfully!!");
    //       console.log(createdata.outdata.id);
    //       break;
    //     case 400:
    //       toastErrorStatus("Missing Details!!");
    //       break;
    //     case 401:
    //       await fetchnewToken(username, password);
    //       if (token.statuscode == 401) {
    //         setToken("");
    //         toastErrorStatus("UnAuthorised Access. Login Again!!");
    //         break;
    //       }
    //       callValidationAndSubmit();
    //       break;
    //     default:
    //       toastErrorStatus("Something went wrong. Try Again!!");
    //       break;
    //   }
    // } else toastErrorStatus("Incomplete Details");
  };

  return (
    <div>
      {" "}
      <h1 className="NPR">Patient Visit Create</h1>
      <div className="Rece-flex-container">
        <div className="container-right">
          <div className="patientDet">
            {/* <div className="fieldRow">
              <span className="patHeading">Patient ID</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp"
                placeholder="Patient ID"
                onChange={(e) => {
                  setsearchDoc(e.target.value);
                }}
              />{" "}
              <span
                className="refreshicon iconstyle "
                onClick={(e) => {
                  searchPatient();
                  console.log("search triggered");
                }}
              >
                <div className="searchstyle">
                  <BsSearch />
                </div>
              </span>
            </div> */}
            <PatientID
              setpatientdetails={setpatientdetails}
              searchPatient={searchPatient}
              BsSearch={BsSearch}
              setpatientid={setpatientid}
            />
            <ConsultingDoctor
              searchDoc={searchDoc}
              setsearchDoc={setsearchDoc}
              setSelectedOption={setSelectedOption}
              newddlist={newddlist}
              triggertoggle={triggertoggle}
              setTriggertoggle={setTriggertoggle}
            />
            {/* <FormDetails InputFields={InputFields} />{" "} */}
            <PaymentType setpatientdetails={setpatientdetails} />
          </div>
        </div>
      </div>
      <div className="buttondiv">
        <button className="button-6 savesubmit">RESET</button>
        <button className="button-6 savesubmit">CREATE VISIT</button>
      </div>
    </div>
  );
};

export default CreateVisit;
