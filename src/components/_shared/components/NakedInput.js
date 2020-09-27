import React from "react";
import PropTypes from "prop-types";
import { InputBase } from "@material-ui/core";

const NakedInput = ({ value, onChange }) => {
  return (
    <>
      <InputBase defaultValue={value} onChange={onChange} />
    </>
  );
};

export default NakedInput;
