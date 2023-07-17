import React from "react";
import Select from "react-select";
import { useState } from "react";

const DropDownElement = ({ resetDropdown, newddlist, setSelectedOption }) => {
  // console.log(selectedvalue);
  return (
    <Select
      key={resetDropdown ? "key1" : "key0"}
      defaultValue={""}
      onChange={(e) => {
        setSelectedOption(e.label);
      }}
      options={newddlist}
      isSearchable={true}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "blue" : "grey",
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