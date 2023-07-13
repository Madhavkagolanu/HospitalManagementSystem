import React, { useEffect } from "react";
import { Con } from "../../Config/Configure";
import FormDetails from "../FormDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { enterPatientDetails } from "../../apis/userverification";
import "../../Pages/Reception/Reception.css";
import { FiRefreshCcw } from "react-icons/fi";
import { useDoctorStore } from "../../store/store";
import { useTokenStore } from "../../store/store";
import { useUsernameStore } from "../../store/store";
import { usePasswordStore } from "../../store/store";

const NewPatient = () => {
  // console.log("newpatients");
  // const navigate = useNavigate();
  let patientdetails = {
    name: "",
    dob: "",
    sex: "",
    emailid: "",
    mobile: "",
    altmobile: "",
    landline: "",
    consultingdoctor: "",
    visitingcharges: "",
    transactionid: "",
    requestid: "",
  };
  const token = useTokenStore((state) => state.token.token);
  const setToken = useTokenStore((state) => state.setToken);
  const fetchnewToken = useTokenStore((state) => state.fetchnewToken);
  const doctorarr = useDoctorStore((state) => state.doctors.data);
  const Docstatuscode = useDoctorStore((state) => state.doctors.statuscode);
  const fetchalldoctors = useDoctorStore((state) => state.fetchalldoctors);
  const username = useUsernameStore((state) => state.username);
  const password = usePasswordStore((state) => state.password);
  const [triggertoggle, setTriggertoggle] = useState(false);

  const [searchDoc, setsearchDoc] = useState("");
  // const [outlist, setoutlist] = useState([]);

  const InputFields = Con.Reception.newPatient.InputFields;
  const getAlldata = async () =>
    await fetchalldoctors(process.env.REACT_APP_GetAllDoctors, token);
  const getTokenData = async () =>
    await fetchnewToken(process.env.REACT_APP_GetTokenURL, username, password);

  // setoutlist(
  //   doctorarr.filter((item) => item.startsWith(searchDoc))
  // );

  useEffect(() => {
    if (username == "" || password == "") {
      setToken("");
    } else {
      getAlldata();
      console.log(doctorarr);
      if (Docstatuscode == 401) getTokenData();
    }
    console.log("useeffect triggered");
    // else setoutlist([]);
  }, [token, triggertoggle]);

  return (
    <div>
      {" "}
      <h1 className="NPR">New Patient Registration</h1>
      <div className="Rece-flex-container">
        <div className="container-right">
          <div className="patientDet">
            <FormDetails InputFields={InputFields} />
            <div className="fieldRow">
              <span className="patHeading">Consulting Doctor</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp dropdowncontainer"
                placeholder="Consulting Doctor"
                onChange={(e) => {
                  setsearchDoc(e.target.value);
                  patientdetails.consultingdoctor = e.target.value;
                }}
              />
              {/* <div className="dropdowncontainer"> */}
              <div className="dropdown">
                {console.log(
                  doctorarr &&
                    doctorarr.filter((item) => {
                      if (searchDoc) {
                        return item.doctorname
                          .toLowerCase()
                          .startsWith(searchDoc.toLowerCase());
                      } else return false;
                    })
                )}
                {/* Test */}
              </div>
              {/* </div> */}
              <span
                className="refreshicon iconstyle"
                onClick={(e) => {
                  // console.log("refresh");
                  setTriggertoggle(!triggertoggle);
                }}
              >
                <FiRefreshCcw />
              </span>
            </div>
            <div className="fieldRow">
              <span className="patHeading">Amount Payable</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp"
                placeholder="Amount Payable"
                onChange={(e) => {
                  patientdetails.visitingcharges = e.target.value;
                }}
              />
              <span className="refreshicon"></span>
            </div>
            <div className="fieldRow">
              <span className="patHeading">Payment Type</span>
              <span className="star">*</span>
              <input
                type="text"
                className="RecInp"
                placeholder="Payment Type"
                onChange={(e) => {
                  patientdetails.transactionid = e.target.value;
                }}
              />
              <span className="refreshicon"></span>
            </div>
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
            enterPatientDetails(
              process.env.REACT_APP_CreatePatient,
              patientdetails
            );
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewPatient;
