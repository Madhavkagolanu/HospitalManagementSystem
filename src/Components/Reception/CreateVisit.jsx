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
import { PaymentType, PatientID, Amount } from "../Fields";
import { FillVisitingData } from "../../Logic/FormatData";
import { CardDisplay } from "../CardDisplay";
import {
  searchpatientvalidation,
  visitingdetailsvalidation,
} from "../../Logic/Validators";

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

  const [carddetails, setcarddetails] = useState({});
  const [searchDoc, setsearchDoc] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [patientdetails, setpatientdetails] = useState({});
  const [triggerreset, settriggerreset] = useState(false);
  const [retriggersubmit, setretriggersubmit] = useState(false);
  const [retriggersearch, setretriggersearch] = useState(false);

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
    setpatientID("");
    setcarddetails({});
  };

  const searchPatient = async () => {
    console.log(
      process.env.REACT_APP_SearchPatient,
      patientdetails.patientdetails.patientid
    );
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
    console.log(searchoutput);
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

  return (
    <div>
      {" "}
      <h1 className="NPR">Patient Visit Create</h1>
      <div className="Rece-flex-container">
        <div className="container-right">
          <div className="patientDet">
            <PatientID
              setpatientdetails={setpatientdetails}
              searchPatient={searchPatient}
              BsSearch={BsSearch}
              triggerreset={triggerreset}
              needsearch={true}
              patientid={patientid}
              setpatientid={setpatientID}
            />
            <ConsultingDoctor
              searchDoc={searchDoc}
              setsearchDoc={setsearchDoc}
              setSelectedOption={setSelectedOption}
              newddlist={newddlist}
              triggertoggle={triggertoggle}
              setTriggertoggle={setTriggertoggle}
              triggerreset={triggerreset}
            />
            {/* <FormDetails InputFields={InputFields} />{" "} */}
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
        <button className="button-6 savesubmit" onClick={resetform}>
          RESET
        </button>
        <button
          className="button-6 savesubmit"
          onClick={callValidationAndSubmit}
        >
          CREATE VISIT
        </button>
      </div>
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
