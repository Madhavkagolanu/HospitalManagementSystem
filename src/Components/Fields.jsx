import { useEffect, useState } from "react";
var _ = require("lodash");


export const NameField = ({
  triggerreset,
  setpatientdetails,
  disabled,
  externalvalue,
  count
}) => {
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    setValue(e.target.value);
    setpatientdetails((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  useEffect(() => {
    setValue("");
  }, [triggerreset,count]);

  useEffect(() => {
    if (_.isEmpty(externalvalue.trim())) setValue(externalvalue);
  }, [externalvalue]);

  return (
    <div className="fieldRow">
      <span className="patHeading">Name</span>
      <span className="star">*</span>
      <input
        required
        id="name"
        type="text"
        className="RecInp"
        placeholder="Name"
        maxLength={32}
        value={value}
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              namevalue: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Dob = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Dob</span>
      <span className="star">*</span>
      <input
        required
        type="date"
        className="RecInp"
        placeholder="Dob"
        maxLength={10}
        value={value}
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              dob: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Sex = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Sex</span>
      <span className="star">*</span>
      <input
        required
        type="text"
        className="RecInp"
        placeholder="Sex"
        value={value}
        maxLength={1}
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              sex: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const EmailField = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Email</span>
      {/* <span className="star">*</span> */}
      <span className="star"></span>
      <input
        // required
        type="text"
        className="RecInp"
        value={value}
        maxLength={50}
        placeholder="Email"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              emailid: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Mobile = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Mobile</span>
      <span className="star">*</span>
      <input
        required
        type="number"
        value={value}
        maxLength={10}
        className="RecInp"
        placeholder="Mobile"
        onChange={(e) => {
          if (e.target.value.length <= 10) {
            setpatientdetails((prevState) => ({
              patientdetails: {
                ...prevState.patientdetails,
                mobile: e.target.value,
              },
            }));
            setValue(e.target.value);
          }
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Altmobile = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Alternate Mobile</span>
      {/* <span className="star">*</span> */}
      <span className="star"></span>
      <input
        // required
        type="number"
        value={value}
        maxLength={10}
        className="RecInp"
        placeholder="Alternate Mobile"
        onChange={(e) => {
          if (e.target.value.length <= 10) {
            setpatientdetails((prevState) => ({
              patientdetails: {
                ...prevState.patientdetails,
                altmobile: e.target.value,
              },
            }));
            setValue(e.target.value);
          }
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Landline = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Landline</span>
      {/* <span className="star">*</span> */}
      <span className="star"></span>
      <input
        // required
        type="number"
        value={value}
        maxLength={10}
        className="RecInp"
        placeholder="Landline"
        onChange={(e) => {
          if (e.target.value.length <= 10) {
            setpatientdetails((prevState) => ({
              patientdetails: {
                ...prevState.patientdetails,
                landline: e.target.value,
              },
            }));
            setValue(e.target.value);
          }
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Amount = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState('100');
  
  useEffect(() => {
    setValue("");
   
    
  }, [triggerreset])
  
  return (
    <div className="fieldRow">
      <span className="patHeading">Amount Payable</span>
      <span className="star">*</span>
      <label className="RecInp amountPayable">Rs.100</label>
      {/* <input
        required
        type="number"
        value={value}
        className="RecInp"
        placeholder="Amount Payable"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              visitingcharges: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      /> */}
      <span className="refreshicon"></span>
    </div>
  );
};

export const PaymentType = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Payment Type</span>
      <span className="star">*</span>
      <input
        required
        type="text"
        className="RecInp"
        value={value}
        maxLength={50}
        placeholder="Payment Type"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              transactionid: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const PatientID = ({
  triggerreset,
  setpatientdetails,
  patientid,
  setpatientid,
  searchPatient,
  needsearch,
  BsSearch,
}) => {
  const [value, setValue] = useState("");
  const [updateStore, setupdateStore] = useState(true); // this variable will be used to stop store from getting updated on each keystore.
  useEffect(() => {
    console.log("reset form triggered for patient id");
    setValue("");
    patientid = "";
  }, [triggerreset]);

  // if (!_.isEmpty(patientid) && !_.isUndefined(patientid)) setValue(patientid);

  return (
    <div className="fieldRow">
      <span className="patHeading">Patient ID</span>
      <span className="star">*</span>
      <input
        type="text"
        className="RecInp"
        value={value == "" ? patientid : console.log(value)}
        placeholder="Patient ID"
        onChange={(e) => {
          if (updateStore) {
            setupdateStore(false);
            setpatientid("");
          }
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              patientid: e.target.value,
            },
          }));
          // setpatientid(e.target.value);
          setValue(e.target.value);
        }}
        onFocus={(e) => {
          console.log(e.target.value);
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              patientid: e.target.value,
            },
          }));
          // setpatientid(e.target.value);
          setValue(e.target.value);
        }}
        autoFocus
      />{" "}
      {needsearch ? (
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
      ) : (
        <span className="refreshicon iconstyle "></span>
      )}
    </div>
  );
};



// ------------------------------------------------------------------


export const RealtiveName = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Relative Name</span>
      <span className="star">*</span>
      <input
        required
        type="text"
        className="RecInp"
        placeholder="Relative Name"
        maxLength={10}
        value={value}
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              dob: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};


export const RealtiveRelation = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  console.log(value);
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Relative Relation</span>
      <span className="star">*</span>
      <input
        required
        type="text"
        className="RecInp"
        placeholder="Relative Relation"
        maxLength={10}
        value={value}
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              dob: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const RelativePhoneNumber = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  console.log(value);
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Relative Phone Number</span>
      <span className="star">*</span>
      <input
        required
        type="text"
        className="RecInp"
        placeholder="Relative Phone Number"
        maxLength={10}
        value={value}
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              dob: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Address = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Address</span>
      <span className="star">*</span>
      <input
        required
        type="text"
        className="RecInp"
        placeholder="Address"
        maxLength={10}
        value={value}
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              dob: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};


export const FloorNumber = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Floor Number</span>
      <span className="star">*</span>
      <input
        required
        type="number"
        className="RecInp"
        placeholder="Floor Number"
        maxLength={10}
        value={value}
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              dob: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const RoomNumber = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Room Number</span>
      <span className="star">*</span>
      <input
        required
        type="number"
        className="RecInp"
        placeholder="Room Number"
        maxLength={10}
        value={value}
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              dob: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const BedNumber = ({ triggerreset, setpatientdetails }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [triggerreset]);
  return (
    <div className="fieldRow">
      <span className="patHeading">Bed Number</span>
      <span className="star">*</span>
      <input
        required
        type="number"
        className="RecInp"
        placeholder="Bed Number"
        maxLength={10}
        value={value}
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              dob: e.target.value,
            },
          }));
          setValue(e.target.value);
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};





// export const PatientName = ({
//   triggerreset,
//   setpatientdetails,
//   disabled,
//   externalvalue,
// }) => {
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     setValue("");
//   }, [triggerreset]);
//   useEffect(() => {
//     if (_.isEmpty(externalvalue.trim())) setValue(externalvalue);
//   }, [externalvalue]);

//   return (
//     <div className="fieldRow">
//       <span className="patHeading">Name</span>
//       <span className="star">*</span>
//       <input
//         required
//         type="text"
//         className="RecInp"
//         placeholder="Name"
//         maxLength={32}
//         value={value}
//         disabled={disabled}
//         onChange={(e) => {
//           setpatientdetails((prevState) => ({
//             patientdetails: {
//               ...prevState.patientdetails,
//               namevalue: e.target.value,
//             },
//           }));
//           setValue(e.target.value);
//         }}
//       />
//       <span className="refreshicon"></span>
//     </div>
//   );
// };
