export const NameField = ({ setpatientdetails }) => {
  return (
    <div className="fieldRow">
      <span className="patHeading">Name</span>
      <span className="star">*</span>
      <input
        required
        type="text"
        className="RecInp"
        placeholder="Name"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              namevalue: e.target.value,
            },
          }));
        }}
        onSubmit={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              namevalue: e.target.value,
            },
          }));
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Dob = ({ setpatientdetails }) => {
  return (
    <div className="fieldRow">
      <span className="patHeading">Dob</span>
      <span className="star">*</span>
      <input
        required
        type="date"
        className="RecInp"
        placeholder="Dob"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              dob: e.target.value,
            },
          }));
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Sex = ({ setpatientdetails }) => {
  return (
    <div className="fieldRow">
      <span className="patHeading">Sex</span>
      <span className="star">*</span>
      <input
        required
        type="text"
        className="RecInp"
        placeholder="Sex"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              sex: e.target.value,
            },
          }));
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const EmailField = ({ setpatientdetails }) => {
  return (
    <div className="fieldRow">
      <span className="patHeading">Email</span>
      {/* <span className="star">*</span> */}
      <span className="star"></span>
      <input
        // required
        type="text"
        className="RecInp"
        placeholder="Email"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              emailid: e.target.value,
            },
          }));
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Mobile = ({ setpatientdetails }) => {
  return (
    <div className="fieldRow">
      <span className="patHeading">Mobile</span>
      <span className="star">*</span>
      <input
        required
        type="text"
        className="RecInp"
        placeholder="Mobile"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              mobile: e.target.value,
            },
          }));
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Altmobile = ({ setpatientdetails }) => {
  return (
    <div className="fieldRow">
      <span className="patHeading">Alternate Mobile</span>
      {/* <span className="star">*</span> */}
      <span className="star"></span>
      <input
        // required
        type="text"
        className="RecInp"
        placeholder="Alternate Mobile"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              altmobile: e.target.value,
            },
          }));
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Landline = ({ setpatientdetails }) => {
  return (
    <div className="fieldRow">
      <span className="patHeading">Landline</span>
      {/* <span className="star">*</span> */}
      <span className="star"></span>
      <input
        // required
        type="text"
        className="RecInp"
        placeholder="Landline"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              landline: e.target.value,
            },
          }));
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const Amount = ({ setpatientdetails }) => {
  return (
    <div className="fieldRow">
      <span className="patHeading">Amount Payable</span>
      <span className="star">*</span>
      <input
        required
        type="text"
        className="RecInp"
        placeholder="Amount Payable"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              visitingcharges: e.target.value,
            },
          }));
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const PaymentType = ({ setpatientdetails }) => {
  return (
    <div className="fieldRow">
      <span className="patHeading">Payment Type</span>
      <span className="star">*</span>
      <input
        required
        type="text"
        className="RecInp"
        placeholder="Payment Type"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              transactionid: e.target.value,
            },
          }));
        }}
      />
      <span className="refreshicon"></span>
    </div>
  );
};

export const PatientID = ({
  setpatientdetails,
  setpatientid,
  searchPatient,
  BsSearch,
}) => {
  return (
    <div className="fieldRow">
      <span className="patHeading">Patient ID</span>
      <span className="star">*</span>
      <input
        type="text"
        className="RecInp"
        placeholder="Patient ID"
        onChange={(e) => {
          setpatientdetails((prevState) => ({
            patientdetails: {
              ...prevState.patientdetails,
              transactionid: e.target.value,
            },
          }));
          setpatientid(e.target.value);
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
    </div>
  );
};
