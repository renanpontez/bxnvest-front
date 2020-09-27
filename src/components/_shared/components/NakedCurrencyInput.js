import React from "react";
import PropTypes from "prop-types";
import { Box, InputBase, makeStyles } from "@material-ui/core";
import CurrencyInput from "react-currency-input";

const useStyles = makeStyles((theme) => ({
  inputsWrapper: {
    '& input': {
      backgroundColor: 'transparent',
      padding: theme.spacing(4),
      height: 40,
      fontSize: theme.typography.pxToRem(25),
      outline: 0,
      border: 0,
      width: '100%',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
    }
  }
}));

const NakedCurrencyInput = ({ value, onChange }) => {
  const classes = useStyles();
  const handleFocus = (event) => event.target.select();

  return (
    <>
      <Box className={classes.inputsWrapper}>
        <CurrencyInput 
          onClick={handleFocus}
          prefix={'$ '} 
          value={value} 
          onChangeEvent={onChange} />
      </Box>
    </>
  );
};

export default NakedCurrencyInput;
