import React, { useState } from "react";
import Modal from './Modal';
import { useLocation } from 'react-router-dom';
import Array from "./Array";
import { RawData } from "./RawData";

function FormDetails({ InputFields }) {
  const location = useLocation();

  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [phn,setPhn]=useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPhn();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {Object.entries(InputFields).map(([index, key]) => (
          <div className="patientDet" key={index}>
            {key[0] !== 'OR' ? (
              <div>
                <span className="patHeading">
                  {key[0]} {key[1] === 1 && <span className="star">*</span>}
                </span>
                <input
                  type={key[2]}
                  className="RecInp"
                  placeholder={key[0]}
                  name={key[0]}
                  value={phn}
                  onChange={(e)=>setPhn(e.target.value)}
                  // onSubmit={(e)=>setPhn(e.target.value)}
                  // onChange={handleChange}
                />
              </div>
            ) : (
              <div style={{ color: "black", textAlign: "center" }}>OR</div>
            )}
          </div>
        ))}
        {/* <button className="button-17 savesubmit" role="button" type="submit">
          Submit
        </button> */}
      </form>
      {/* {location.pathname === '/reception/newPatient' && showModal && (
        <Modal formData={formData} closeModal={closeModal} />
      )} */}
      {location.pathname === "/reception/search" && (
        <Array FormData={phn} RawData={RawData} />
      )}
    </div>
  );
}

export default FormDetails;
