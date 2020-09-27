import React from "react";
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InvestmentsResultsContext from "../../pages/investment/InvestmentsResultsContext";
import Button from "./Button";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Accordion from "./Accordion";
import Table from "./Table";
import DashboardContext from "../../pages/dashboard/DashboardContext";
import { CRYPTOCURRENCY } from "../../../constants/general";
import CardListDetails from "./CardListDetails";

const CardListCrypto = ({ itemsList }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <DashboardContext.Consumer>
      {({ buyInvestment, isPaymentLoading }) => (
        <InvestmentsResultsContext.Consumer>
          {({ amount }) => (
            <>
              {itemsList.map((item, i) => (
                <Accordion
                  key={i}
                  className={i % 2 ? "even" : "odd"}
                  expanded={expanded === i}
                  onChange={handleChange(i)}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container>
                      <Grid item xs={3}>
                        <Typography variant={"body1"}>
                          {item.fromCurrency}
                        </Typography>
                        <Typography variant={"body2"}>
                          {item.shortName}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}></Grid>
                      <Grid item xs={3}>
                        {(amount / item.regularMarketPrice).toFixed(6)}
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box py={2} width={"100%"}>
                      <CardListDetails items={[
                        { label: "Day low", value: '$ ' + item.regularMarketDayLow.toFixed(2) },
                        { label: "Day high", value: '$ ' + item.regularMarketDayHigh.toFixed(2) },
                        { label: "Market change (%)", value: item.regularMarketChangePercent.toFixed(2) },
                        { label: "Price", value: '$ ' + item.regularMarketPrice.toFixed(2) },
                      ]} />

                      <Box>
                        <Button
                          variant={"contained"}
                          color={"primary"}
                          fullWidth
                          isLoading={isPaymentLoading}
                          className={""}
                          size={"small"}
                          onClick={() => buyInvestment(item, amount, CRYPTOCURRENCY)}
                        >
                          BUY NOW $ {amount} <MonetizationOnIcon />
                        </Button>
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
            </>
          )}
        </InvestmentsResultsContext.Consumer>
      )}
    </DashboardContext.Consumer>
  );
};

export default CardListCrypto;
