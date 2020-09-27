import React, { useState } from "react";
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InvestmentsResultsContext from "../../pages/investment/InvestmentsResultsContext";
import Button from "./Button";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Accordion from "./Accordion";
import CardListDetails from "./CardListDetails";
import DashboardContext from "../../pages/dashboard/DashboardContext";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { STOCK } from "../../../constants/general";

const useStyles = makeStyles((theme) => ({
  quantityStock: {},
}));

const CardListStock = ({ itemsList }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [quantityStock, setQuantityStock] = React.useState(1);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setQuantityStock(1);
  };

  const handleQuantityStock = (stockValue, operation, amount) => {
    if (operation === "add") {
      if (stockValue * (quantityStock + 1) <= amount) {
        setQuantityStock(quantityStock + 1);
      }
    } else {
      setQuantityStock(quantityStock - 1 > 0 ? quantityStock - 1 : 1);
    }
  };

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
                        <Typography variant={"body1"}>{item.symbol}</Typography>
                      </Grid>

                      <Grid item xs={3}>
                        <Typography variant={"body2"}>
                          ${item.last.toFixed(2)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box py={2} width={"100%"}>
                      <CardListDetails
                        items={[
                          { label: "Day low", value: item.low },
                          { label: "Day high", value: item.high },
                          { label: "Day open", value: item.open },
                          {
                            label: "Date",
                            value: new Date(item.date).toLocaleString("en-US"),
                          },
                        ]}
                      />

                      <Grid container>
                        <Grid item xs={6} md={3}>
                          <Box>
                            {amount / item.last > 1 && (
                              <Box className={classes.quantityStock}>
                                <IconButton
                                  onClick={() =>
                                    handleQuantityStock(
                                      item.last,
                                      "remove",
                                      amount
                                    )
                                  }
                                >
                                  <RemoveIcon />
                                </IconButton>
                                <Typography variant={"body2"}>
                                  {quantityStock}
                                </Typography>
                                <IconButton
                                  onClick={() =>
                                    handleQuantityStock(
                                      item.last,
                                      "add",
                                      amount
                                    )
                                  }
                                >
                                  <AddIcon />
                                </IconButton>
                              </Box>
                            )}
                          </Box>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <Button
                            variant={"contained"}
                            color={"primary"}
                            fullWidth
                            isLoading={isPaymentLoading}
                            className={""}
                            size={"small"}
                            onClick={() => buyInvestment(item, amount, STOCK, quantityStock,)}
                          >
                            INVEST $ {(quantityStock * item.last).toFixed(2)} NOW <MonetizationOnIcon />
                          </Button>
                        </Grid>
                      </Grid>
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

export default CardListStock;
