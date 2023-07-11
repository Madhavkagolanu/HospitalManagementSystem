import React from "react";

function FormDetails({ InputFields }) {
  return (
    <div>
      <div>
        <>
          {Object.entries(InputFields).map(([index, key]) => (
            <div className="patientDet">
              <span className="patHeading">
                {key[0]} {key[1] == 1 ? <span className="star">*</span> : ""}
              </span>
              <input type={key[2]} className="RecInp" placeholder={key[0]} />
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

export default FormDetails;
