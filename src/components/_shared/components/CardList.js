import React from "react";
import PropTypes from "prop-types";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Box,
  Grid,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { CRYPTOCURRENCY } from "../../../constants/general";
import CardListContentCrypto from "./CardListCrypto";
import CardListContentStock from "./CardListStock";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    '& heading': {
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    '& secondaryHeading': {
      color: theme.palette.text.secondary,
    },
  },
}));

const Accordion = withStyles((theme) => ({
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

const AccordionSummary = withStyles({
  root: {
    borderBottom: 0,
  },
  expanded: {},
})(MuiAccordionSummary);


const CryptoHeader = item => (
  <Grid container>
    <Grid item xs={1}>
      {item.fromCurrency}
    </Grid>
    <Grid item xs={3}>
      {item.shortName}
    </Grid>
    <Grid item xs={3}>
      {(context.amount/item.regularMarketPrice).toFixed(6)}
    </Grid>
  </Grid>
);

const StockHeader = item => (
  <Grid container>
    1
  </Grid>
);

const CardList = ({ itemsList, listType }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const ContentComponent = listType === CRYPTOCURRENCY ? CardListContentCrypto : CardListContentStock;

  return (
    <>
      {itemsList.map((eachItem, i) => (
        <Accordion
          key={i}
          className={i % 2 ? "even" : "odd"}
          expanded={expanded === i}
          onChange={handleChange(i)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {listType === CRYPTOCURRENCY ? (
              <CryptoHeader item={eachItem} /> 
            ) : ( 
              <StockHeader itemm={eachItem} />
            )};
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          </AccordionDetails>
      </Accordion>
      ))}
    </>
  );
};

CardList.propTypes = {};

export default CardList;
