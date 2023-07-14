import React from "react";
import Select from "react-select";
import { useState } from "react";

const DropDownElement = ({ newddlist, setSelectedOption }) => {
  return (
    <Select
      defaultValue={""}
      onChange={(e) => {
        setSelectedOption(e.label);
      }}
      options={newddlist}
      isSearchable={true}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "grey" : "red",
          color: "black",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          color: "black",
        }),
        container: (baseStyles, state) => ({
          ...baseStyles,
          flex: "70",
        }),
      }}
    />
  );
};

export default DropDownElement;
