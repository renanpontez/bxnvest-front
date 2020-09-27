import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },

  card: {
    backgroundColor: theme.palette.background.default,
    borderRadius: 15,
  }
}));

const WalletComponent = ({ wallet, walletData }) => {
  const classes = useStyles();

  const [mainWalletData, setMainWalletData] = React.useState([]);
  const [showingCryptos, setShowingCryptos] = React.useState(false);

  React.useEffect(() => {
    let newWalletData = [];

    if (wallet && walletData) {
      if (walletData.stocksData && walletData.stocksData.length) {
        newWalletData = newWalletData.concat(
          walletData.stocksData.map((stock) => ({
            symbol: stock.symbol,
            price: stock.last,
            high: stock.high,
            low: stock.low,
            open: stock.open,
            updatedAt: stock.date,
            boughtAt: wallet.find((t) => t.symbol === stock.symbol).date,
            amountInvested: wallet.find((t) => t.symbol === stock.symbol)
              .amount,
            volume: wallet.find((t) => t.symbol === stock.symbol).volume,
          }))
        );
      }

      if (walletData.cryptosData && walletData.cryptosData.length) {
        newWalletData = newWalletData.concat(
          walletData.cryptosData.map((crypto) => ({
            symbol: crypto.symbol,
            price: crypto.regularMarketPrice,
            high: crypto.regularMarketDayHigh,
            low: crypto.regularMarketDayLow,
            open: crypto.regularMarketOpen,
            updatedAt: new Date(),
            boughtAt: wallet.find((t) => t.symbol === crypto.symbol).date,
            amountInvested: wallet.find((t) => t.symbol === crypto.symbol)
              .amount,
            volume: wallet.find((t) => t.symbol === crypto.symbol).volume,
          }))
        );
      }
    }

    setMainWalletData(newWalletData);
  }, [wallet, walletData]);

  if (!mainWalletData.length) {
    return (
      <Typography variant={'body2'}>
        You don't have any assets at the moment. Would you like to invest now?
      </Typography>
    );
  }
  return (
    <>
      <Box py={3}>
        <Grid container spacing={2}>
          {mainWalletData.map((eachAsset, i) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} component={Box}>
                <CardContent>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant={"body1"}>
                        Asset: {eachAsset.symbol}
                      </Typography>
                      <Typography variant={"body1"}>
                        Variation:{" "}
                        {(
                          (eachAsset.volume * eachAsset.price) /
                          (eachAsset.volume * eachAsset.amountInvested)
                        ).toFixed(2)}
                        %
                      </Typography>
                      <Typography variant={"body1"}>
                        Actual price: $ {eachAsset.price.toFixed(2)}
                      </Typography>
                      <Typography variant={"body1"}>
                        Volume: {eachAsset.volume}
                      </Typography>
                      <hr />
                      <Typography variant={"body1"}>
                        Day high: $ {eachAsset.high.toFixed(2)}
                      </Typography>
                      <Typography variant={"body1"}>
                        Day low: $ {eachAsset.low.toFixed(2)}
                      </Typography>
                      <Typography variant={"body1"}>
                        Day open: $ {eachAsset.open.toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default WalletComponent;
