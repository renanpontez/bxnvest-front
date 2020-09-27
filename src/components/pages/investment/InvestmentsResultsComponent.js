import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Grow, Hidden, IconButton, makeStyles, Slide, Typography } from "@material-ui/core";
import { useHistory, withRouter } from "react-router-dom";
import { getCryptos } from "../../../services/cryptosService";
import StyledCard from "../../_shared/components/StyledCard";
import PageLoader from "../../_shared/components/PageLoader";
import { CRYPTOCURRENCY, STOCK } from "../../../constants/general";
import InvestmentsResultsContext from "./InvestmentsResultsContext";
import CardListStock from "../../_shared/components/CardListStock";
import CardListCrypto from "../../_shared/components/CardListCrypto";
import BuyInvestmentComponent from "./BuyInvestmentComponent";
import { requestPayment } from "../../../services/paymentService";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  resultsRoot: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    overflowY: 'auto'
  }
}));

const InvestmentsResultsComponent = ({
  clearResults,
  resultsData,
  amount
}) => {
  if (!resultsData) return <PageLoader />;

  const classes = useStyles();
  return (
    <Box className={classes.resultsRoot}>
      <Box
        position={"absolute"}
        right={20}
        top={20}
        onClick={() => clearResults()}
      >
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>

      <InvestmentsResultsContext.Provider value={{ amount: resultsData.amount }}>
        <Slide in={true} direction={"up"}>
          <Box>
            <Box mb={5} textAlign={"center"}>
              <Grid container alignItems={"center"}>
                <Grid item sm={12} md={5}>
                  <Hidden smDown>
                    <Typography variant={"body2"}>
                      home // investing // ${amount}
                    </Typography>
                  </Hidden>
                </Grid>

                <Grid item sm={12} md={4}>
                  <Box textAlign={"center"}>
                    <Typography variant={"h3"}>
                      Finding the best invesment
                    </Typography>
                    <Typography variant={"body2"}>
                      According to your profile and how much you would like to
                      invest we think these are the best results.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <StyledCard title={"Stocks"}>
                  {resultsData.stocksData.length ? (
                    <CardListStock listType={STOCK} itemsList={resultsData.stocksData} />
                  ) : (
                    <Box py={2}>
                      <Typography variant={"body2"}>
                        Oops! We couldn't find any stock for your investment. Would
                        your consider increase the investmen?
                      </Typography>
                    </Box>

                  )}
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledCard title={"Cryptocurrencies"}>
                  {resultsData.cryptosData.length ? (
                    <CardListCrypto listType={CRYPTOCURRENCY} itemsList={resultsData.cryptosData} />
                    ) : (
                      <Box py={2}>
                        <Typography variant={"body2"}>
                          Oops! We couldn't find any cryptocurrency for your investment. Would
                          you mind trying back later?
                        </Typography>
                      </Box>
                    )}
                </StyledCard>
              </Grid>
            </Grid>
          </Box>
        </Slide>
      </InvestmentsResultsContext.Provider>
    </Box>
  );
};

InvestmentsResultsComponent.propTypes = {};

export default InvestmentsResultsComponent;
