import React from "react";
import Button from "../../_shared/components/Button";
import { Box, Grid, makeStyles, Slide, Typography } from "@material-ui/core";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import StyledCard from "../../_shared/components/StyledCard";
import InvisibleInput from "../../_shared/components/NakedInput";
import NakedInput from "../../_shared/components/NakedInput";
import NakedCurrencyInput from "../../_shared/components/NakedCurrencyInput";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
import { getStocksByPrice } from "../../../services/stocksService";
import { getCryptos } from "../../../services/cryptosService";

const useStyles = makeStyles((theme) => ({
  amountModal: {
    [theme.breakpoints.down("sm")]: {
      left: 20,
    },
  },
}));

const FindInvestmentComponent = ({ setResultsData }) => {
  const classes = useStyles();
  const history = useHistory();

  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const [amount, setAmount] = React.useState("0.00");
  const [floatAmount, setFloatAmount] = React.useState("0.00");
  const [isFinding, setIsFinding] = React.useState(false);

  const handleAmount = (e, maskedValue, floatValue) => {
    if (!floatValue) maskedValue = "0.00";

    setAmount(maskedValue);
    setFloatAmount(floatValue);
  };

  const findInvestments = async () => {
    if(floatAmount >= 50) {
      setIsFinding(true);

      const stocksData = await getStocksByPrice(floatAmount);
      const cryptosData = await getCryptos();

      setResultsData({
        amount: floatAmount,
        stocksData,
        cryptosData,
      });

      setIsModalOpened(false);
    }
  };

  return (
    <>
      <Slide in={isModalOpened} direction={"up"}>
        <Box
          bottom={20}
          right={20}
          position={"fixed"}
          zIndex={2}
          className={classes.amountModal}
        >
          <StyledCard
            elevation={15}
            title={"How much do you want to invest?"}
            subtitle={
              "We are going to choose the best options according to the amount you choose to invest."
            }
          >
            <Box
              position={"absolute"}
              right={20}
              top={20}
              onClick={() => setIsModalOpened(false)}
            >
              <CloseIcon />
            </Box>
            <Box py={4} textAlign="center">
              <NakedCurrencyInput value={amount} onChange={handleAmount} />

              <Typography variant={'body2'}>
                *minimum amount $50
              </Typography>
            </Box>

            <Button
              variant={"contained"}
              color={"primary"}
              fullWidth
              isLoading={isFinding}
              className={classes.floatingButton}
              onClick={() => {
                findInvestments().then(() => {
                  setIsFinding(false);
                });
              }}
            >
              FIND OPTIONS <MonetizationOnIcon />
            </Button>
          </StyledCard>
        </Box>
      </Slide>

      {/* floating button */}
      <Box position={"fixed"} bottom={40} right={40}>
        <Button
          variant={"contained"}
          color={"primary"}
          size={"large"}
          className={classes.floatingButton}
          onClick={() => setIsModalOpened(true)}
        >
          Invest now <MonetizationOnIcon />
        </Button>
      </Box>
    </>
  );
};

export default FindInvestmentComponent;
