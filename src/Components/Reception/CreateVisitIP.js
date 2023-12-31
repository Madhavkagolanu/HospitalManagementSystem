import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import ConsultingDoctor from "../ConsultingDoctor";
import { searchPatientDetails } from "../../apis/userverification";
import { useTokenStore } from "../../store/store";
import { useUsernameStore } from "../../store/store";
import { toastSuccessStatus, toastErrorStatus } from "../sendToast";
import { usePasswordStore } from "../../store/store";
import { usePatientIDStore } from "../../store/store";
import { useIPDetailsStore } from "../../store/store";
import "../../Pages/Reception/Reception.css";
import {
  PaymentType,
  PatientID,
  Amount,
  InPatientID,
  RelativeName,
  RelativeRelation,
  Address,
  RelativePhoneNumber,
  RoomNumber,
  FloorNumber,
  BedNumber,
} from "../Fields";
import { FillVisitingData } from "../../Logic/FormatData";
import { CardDisplay } from "../CardDisplay";
import {
  searchpatientvalidation,
  visitingdetailsvalidation,
} from "../../Logic/Validators";
import GovtIDField from "../GovtIDField";
import DeptID from "../DeptID";
import ConDoctorDD from "../ConDoctorDD";
import BedType from "../BedType";

const CreateVisit = ({ newddlist, triggertoggle, setTriggertoggle }) => {
  const carddatatemplate = {};

  const statuscode = useTokenStore((state) => state.token.statuscode);
  const token = useTokenStore((state) => state.token.token);
  const setToken = useTokenStore((state) => state.setToken);
  const fetchnewToken = useTokenStore((state) => state.fetchnewToken);
  const username = useUsernameStore((state) => state.username);
  const password = usePasswordStore((state) => state.password);
  const patientid = usePatientIDStore((state) => state.patientID);
  const setpatientID = usePatientIDStore((state) => state.setpatientID);
  const ippatientdetails = useIPDetailsStore((state) => state.ippatientdetails);
  const resetippatientdetails = useIPDetailsStore(
    (state) => state.resetippatientdetails
  );

  const [carddetails, setcarddetails] = useState({});
  // const [searchDoc, setsearchDoc] = useState("");
  const [patientdetails, setpatientdetails] = useState({});
  const [searchDoc, setsearchDoc] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [triggerreset, settriggerreset] = useState(false);
  const [retriggersubmit, setretriggersubmit] = useState(false);
  const [retriggersearch, setretriggersearch] = useState(false);

  useEffect(() => {
    // console.log("selected option effect triggered");
    setpatientdetails((prevState) => ({
      patientdetails: {
        ...prevState.patientdetails,
        consultingdoctor: selectedOption,
      },
    }));
  }, [selectedOption]);

  useEffect(() => {
    // console.log("search doc effect triggered");
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
    if (retriggersearch) {
      searchPatient();
      setretriggersearch(false);
    }
  }, [retriggersubmit, retriggersearch]);

  // const resetForm = () => {
  //   setpatientid("");
  // };

  const resetform = () => {
    settriggerreset(!triggerreset);
    setpatientdetails("");
    setpatientID("");
    setcarddetails({});
  };

  const searchPatient = async () => {
    // console.log(
    //   process.env.REACT_APP_SearchPatient,
    //   patientdetails.patientdetails.patientid
    // );
    let searchoutput = {};
    if (searchpatientvalidation(patientdetails.patientdetails.patientid, "")) {
      let searchdata = await searchPatientDetails(
        process.env.REACT_APP_SearchPatient,
        patientdetails.patientdetails.patientid,
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
          console.log(searchdata.outdata.data[0]);
          searchoutput.success = true;
          searchoutput.patientid = searchdata.outdata.data[0].patientid;
          searchoutput.patientname = searchdata.outdata.data[0].patientname;
          searchoutput.patientdob = searchdata.outdata.data[0].patientdob;
          searchoutput.mobilenum = searchdata.outdata.data[0].mobilenum;
          searchoutput.consultingdoctor =
            patientdetails.patientdetails.consultingdoctor;

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
          if (statuscode == 401) {
            setToken("");
            toastErrorStatus("UnAuthorised Access. Login Again!!");
            break;
          }
          setretriggersearch(true);
          break;
        default:
          toastErrorStatus("Something went wrong. Try Again!!");
          break;
      }
    } else toastErrorStatus("Incomplete Details");
    return searchoutput;
  };

  const callValidationAndSubmit = async () => {
    // console.log(patientdetails.patientdetails);
    // console.log(token);
    let searchoutput = await searchPatient();
    // console.log(searchoutput);
    if (searchoutput.success) {
      if (visitingdetailsvalidation(patientdetails.patientdetails)) {
        let createdata = await FillVisitingData(
          patientdetails.patientdetails,
          token
        );
        switch (createdata.statuscode) {
          case 200:
            if (createdata.outdata.created) {
              console.log(createdata.outdata.id);
              toastSuccessStatus("Patient Visit Created Successfully!!");
              carddatatemplate.patientid = searchoutput.patientid;
              carddatatemplate.patientname = searchoutput.patientname;
              carddatatemplate.patientdob = searchoutput.patientdob;
              carddatatemplate.mobilenum = searchoutput.mobilenum;
              carddatatemplate.consultingdoctor = searchoutput.consultingdoctor;
              setcarddetails(carddatatemplate);
              break;
            }
            resetform();
            toastErrorStatus("Something went wrong. Try Again!!");
            break;
          case 400:
            toastErrorStatus("Missing Details!!");
            break;
          case 401:
            await fetchnewToken(username, password);
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
    } else {
      resetform();
    }
  };
  const [count, setCount] = useState(0);
  const NEXT = () => {
    if (count === 0) setCount(1);
    console.log(count);
    if (count === 1) setCount(2);
    if (count === 2) setCount(3);

    // console.log(patientdetails);
    console.log(ippatientdetails);
  };
  const PREV = () => {
    if (count === 1) setCount(0);
    console.log(count);
    if (count === 2) setCount(1);
    if (count === 3) setCount(2);
  };
  const handleTabChange = (tabIndex) => {
    setCount(tabIndex);
  };

  const patientDetailsArray = [
    { label: "Patient ID", value: ippatientdetails.patientid },
    { label: "Govt ID Type", value: ippatientdetails.govttypeid },
    { label: "Govt ID Value", value: ippatientdetails.govtidvalue },
    { label: "Relative Name", value: ippatientdetails.relativename },
    { label: "Relative Relation", value: ippatientdetails.relativerelation },
    {
      label: "Relative Phone Number",
      value: ippatientdetails.relativephonenumber,
    },
    { label: "Address", value: ippatientdetails.address },
    { label: "Bed Type ID", value: ippatientdetails.bedtypeid },
    { label: "Floor Number", value: ippatientdetails.floornumber },
    { label: "Bed Number", value: ippatientdetails.bedno },
    { label: "Room Number", value: ippatientdetails.roomno },
    { label: "Dept ID", value: ippatientdetails.deptid },
    { label: "Consulting Doctor", value: ippatientdetails.consultingdoctor },
  ];

  return (
    <div>
      {" "}
      <h1 className="NPR">Patient Visit Create IP</h1>
      <button
        className={`button-81 ${count === 0 ? "button-active" : ""}`}
        onClick={() => handleTabChange(0)}>
        Basic
      </button>
      <button
        className={`button-81 ${count === 1 ? "button-active" : ""}`}
        onClick={() => handleTabChange(1)}>
        Bed
      </button>
      <button
        className={`button-81 ${count === 2 ? "button-active" : ""}`}
        onClick={() => handleTabChange(2)}>
        Doctor
      </button>
      <button
        className={`button-81 ${count === 3 ? "button-active" : ""}`}
        onClick={() => handleTabChange(3)}>
        Admission Preview
      </button>
      <div className="Rece-flex-container">
        <div className="container-right">
          <div className="patientDet">
            {count === 0 && (
              <>
                {/* <PatientID
                  setpatientdetails={setpatientdetails}
                  searchPatient={searchPatient}
                  BsSearch={BsSearch}
                  triggerreset={triggerreset}
                  needsearch={true}
                  patientid={patientid}
                  setpatientid={setpatientID}
                /> */}
                <InPatientID />
                <GovtIDField
                  setpatientdetails={setpatientdetails}
                  newddlist={newddlist}
                  triggertoggle={triggertoggle}
                  setTriggertoggle={setTriggertoggle}
                  triggerreset={triggerreset}
                />
                {/* <FormDetails InputFields={InputFields} />{" "} */}
                <RelativeName />
                <RelativeRelation
                  setpatientdetails={setpatientdetails}
                  triggerreset={triggerreset}
                />
                <RelativePhoneNumber
                  setpatientdetails={setpatientdetails}
                  triggerreset={triggerreset}
                />
                <Address
                  setpatientdetails={setpatientdetails}
                  triggerreset={triggerreset}
                />
              </>
            )}
            {count === 1 && (
              <>
                <BedType
                  searchDoc={searchDoc}
                  setsearchDoc={setsearchDoc}
                  setSelectedOption={setSelectedOption}
                  newddlist={newddlist}
                  triggertoggle={triggertoggle}
                  setTriggertoggle={setTriggertoggle}
                  triggerreset={triggerreset}
                />
                <FloorNumber
                  setpatientdetails={setpatientdetails}
                  triggerreset={triggerreset}
                />
                <RoomNumber
                  setpatientdetails={setpatientdetails}
                  triggerreset={triggerreset}
                />
                <BedNumber
                  setpatientdetails={setpatientdetails}
                  triggerreset={triggerreset}
                />
              </>
            )}

            {count === 2 && (
              <>
                <DeptID
                  searchDoc={searchDoc}
                  setsearchDoc={setsearchDoc}
                  setSelectedOption={setSelectedOption}
                  newddlist={newddlist}
                  triggertoggle={triggertoggle}
                  setTriggertoggle={setTriggertoggle}
                  triggerreset={triggerreset}
                />
                <ConDoctorDD
                  searchDoc={searchDoc}
                  setsearchDoc={setsearchDoc}
                  setSelectedOption={setSelectedOption}
                  newddlist={newddlist}
                  triggertoggle={triggertoggle}
                  setTriggertoggle={setTriggertoggle}
                  triggerreset={triggerreset}
                />
              </>
            )}
            {count === 3 && (
              <div className="patient-details">
                {patientDetailsArray.map((detail, index) => (
                  <div key={detail.label} className="detail-row">
                    <div className={`left ${index % 2 === 0 ? "even" : "odd"}`}>
                      <label>{detail.label}:</label>
                    </div>
                    <div
                      className={`right ${index % 2 === 0 ? "even" : "odd"}`}>
                      <span>{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {count > 0 && (
            <button onClick={PREV} type="button" className="button-6">
              Previous
            </button>
          )}
          {count < 3 ? (
            <button onClick={NEXT} type="button" className="button-6">
              Next
            </button>
          ) : (
            <button className="button-6">Submit</button>
          )}
          <button
            className="button-6 reset"
            onClick={
              () => {
                resetippatientdetails();
              }
              // resetform
            }>
            RESET
          </button>
        </div>
      </div>
      {/* <div className="buttondiv">
        <button
          className="button-6 savesubmit"
          onClick={callValidationAndSubmit}
        >
          CREATE VISIT
        </button>
      </div> */}
      <CardDisplay
        key={1}
        data={carddetails}
        CardHeader={"Patient Visit Details"}
        displayprintbutton={true}
        displayradiobutton={false}
        displaykey={1}
        setvisitingpatientid={() => {}}
        setcardkey={() => {}}
        cardkey={""}
        displayheader={true}
      />
    </div>
  );
};

export default CreateVisit;
