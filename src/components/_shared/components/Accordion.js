import React from "react";
import PropTypes from "prop-types";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary as MuiAccordionSummary,

  withStyles,
} from "@material-ui/core";

const StyledAccordion = withStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    margin: `${theme.spacing(1)}px`,
    boxShadow: "none",
    borderRadius: `${theme.spacing(3)}px !important`,

    "&:before": {
      display: "none",
    },
    "&$expanded": {
      boxShadow: "0 0 12px 8px rgb(0 0 0 / 7%);",
    },
    "&.even": {
      backgroundColor: theme.palette.background.cardLighter,
    },
  },
  expanded: {
    boxShadow: "0 0 3px -3px rgba(0,0,0,.05)",
  },
}))(MuiAccordion);

const Accordion = ({ children, ...props }) => (
  <StyledAccordion {...props}>{children}</StyledAccordion>
);

export default Accordion;
