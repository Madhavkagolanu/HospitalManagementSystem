// import React, { useEffect, useState } from "react";
var _ = require("lodash");

export const CardDisplay = ({
  displaykey,
  setvisitingpatientid,
  setcardkey,
  cardkey,
  data,
  CardHeader,
  displayheader,
  displayprintbutton,
  displayradiobutton,
}) => {
  if (_.isEmpty(data)) {
    <div className="nodatacard" />;
  } else {
    return (
      <div
        className="cardcontainer"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (displayradiobutton) {
            setcardkey(displaykey);
            setvisitingpatientid(`${data["Patient id"]}`);
          }
        }}
      >
        {displayheader && <h1 className="cardheader">{CardHeader}</h1>}
        <div className="cardbody">
          <div className="cardbodysection1">
            {Object.keys(data).map((item, idx) => {
              return (
                <div className="data-group">
                  <span className="data-label">{item}:</span>
                  <span className="data-value">{data[item]}</span>
                </div>
              );
            })}
          </div>
          {displayprintbutton && (
            <div className="print-button">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Clicked Print");
                }}
              >
                Print
              </button>
            </div>
          )}
          {displayradiobutton && (
            <div className="print-button">
              <input
                type="radio"
                value={data["Patient id"]}
                checked={cardkey === displaykey}
                readOnly
              />
            </div>
          )}
        </div>
      </div>
    );
  }
};
