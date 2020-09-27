import React from "react";
import PropTypes from "prop-types";
import {
  Button as ButtonMui,
  withStyles,
  CircularProgress,
} from "@material-ui/core";

const WhiteCircularProgress = withStyles((theme) => ({
  root: {
    color: "#fff",
    position: "absolute",
    width: "20px !important",
    height: "20px !important",
  },
}))(CircularProgress);

const StyledButton = withStyles((theme) => ({
  root: {
    fontWeight: 600,
    borderRadius: "40px",
    textAlign: "center",
    color: "#fff",
    minHeight: 50,

    "& .MuiSvgIcon-root": {
      width: 18,
      marginLeft: theme.spacing(1),
    },
  },
}))(ButtonMui);

const Button = ({ children, isLoading, ...buttonProps }) => {
  return (
    <StyledButton {...buttonProps}>
      {isLoading ? <WhiteCircularProgress /> : <>{children}</>}
    </StyledButton>
  );
};

export default Button;
