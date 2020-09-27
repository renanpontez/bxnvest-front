import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import StyledCard from "../../_shared/components/StyledCard";
import FindInvestmentComponent from "../investment/FindInvestmentComponent";
import DashboardContext from "./DashboardContext";
import InvestmentsResultsComponent from "../investment/InvestmentsResultsComponent";
import { CRYPTOCURRENCY, STOCK } from "../../../constants/general";
import {
  requestPaymentCrypto,
  requestPaymentStock,
} from "../../../services/paymentService";
import { getStocksByList } from "../../../services/stocksService";
import { getCryptosByList } from "../../../services/cryptosService";
import WalletComponent from "./WalletComponent";
import { distinct } from "../../../utils/array";
import PageLoader from "../../_shared/components/PageLoader";
import StatementComponent from "./StatementComponent";
import BlogTipsComponent from "./BlogTipsComponent";

const HomepageComponent = (props) => {
  const history = useHistory();

  //state
  const [wallet, setWallet] = React.useState([]);
  const [resultsData, setResultsData] = React.useState(null);
  const [isLoadingDashboard, setIsLoadingDashboard] = React.useState(false);
  const [isPaymentLoading, setIsPaymentLoading] = React.useState(false);

  const [walletData, setWalletData] = React.useState({ stocksData: null, cryptosData: null });
  const [actualBalance, setActualBalance] = React.useState(0);

	const [statement, setStatement] = React.useState([]);

  //listeners
  React.useEffect(() => {
		setIsLoadingDashboard(true);
		updateWalletData();
  }, [wallet]);

	React.useEffect(() => {
		setActualBalance(getBalance());
		setIsLoadingDashboard(false);
  }, [walletData]);

  //handlers
  const updateWalletData = async () => {
    if (wallet.length === 0) {
      return setWalletData(null);
    }

    let stocksData;
    let cryptosData;

    const stockWallet = wallet.filter((t) => t.type === STOCK);
    if (stockWallet.length) {
      stocksData = await getStocksByList(
        distinct(stockWallet.map((t) => t.symbol))
      );
    }

    const cryptoWallet = wallet.filter((t) => t.type === CRYPTOCURRENCY);
    if (cryptoWallet.length) {
      cryptosData = await getCryptosByList(cryptoWallet.map((t) => t.symbol));
		}
		
		setWalletData({
			stocksData,
			cryptosData
		})
  };

  const getBalance = () => {
    if (!walletData) {
      return 0;
		}
		
		let stocksBalance = 0;
		const stockWallet = wallet.filter((t) => t.type === STOCK);

    if (stockWallet.length) {
			stocksBalance = stockWallet.map(t => {
				if(walletData.stocksData) {
					return t.volume * walletData.stocksData.find(y => y.symbol === t.symbol).last
				} else {
					return 0;
				}
			}).reduce((a,b) => a+b);
		}
			
		let cryptosBalance = 0;
		const cryptoWallet = wallet.filter((t) => t.type === CRYPTOCURRENCY);

    if (cryptoWallet.length) {
			cryptosBalance = cryptoWallet.map(t => {
				if(walletData.cryptosData) {
					return t.volume * walletData.cryptosData.find(y => y.symbol === t.symbol).regularMarketPrice
				} else {
					return 0;
				}
			}).reduce((a,b) => a+b);
		}

    return (stocksBalance + cryptosBalance).toFixed(2);
  };

  const buyInvestment = (itemData, amount, itemType, quantityStock = 1) => {
    setIsPaymentLoading(true);

    if (itemType === CRYPTOCURRENCY) {
      buyCrypto(itemData, amount);
    } else if (itemType === STOCK) {
      buyStock(itemData, quantityStock);
    }
  };

  const buyCrypto = (cryptoData, amount) =>
    requestPaymentCrypto(cryptoData, amount).then(handleResponse);

  const buyStock = (stockData, quantity) =>
    requestPaymentStock(stockData, quantity).then(handleResponse);

  const handleResponse = (res) => {
    if (res.success) {
      addItemToWallet(res.data);
			setResultsData(null);
			setStatement(statement.concat([{
				type: "IN",
				data: res.data
			}]))
    }

    setIsPaymentLoading(false);
  };

  const addItemToWallet = (item) => setWallet(wallet.concat([item]));


	if (isLoadingDashboard) return <PageLoader />;

  return (
    <DashboardContext.Provider
      value={{
        wallet,
        addItemToWallet,
        buyInvestment,
        setResultsData,
        isPaymentLoading,
      }}
    >
      <Box className="wrappeer">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box mb={2}>
              <StyledCard elevation={1} title={"Actual balance"}>
								<Typography variant={"h3"}>
                	$ {actualBalance}
								</Typography>
              </StyledCard>
            </Box>

						<Box mb={2}>
	            <StyledCard elevation={1} title={"Statement"}>
								<StatementComponent statement={statement} />
							</StyledCard>
						</Box>
						
						<Box mb={2}>
            	<StyledCard elevation={1} title={"Blog tips"}>
								<BlogTipsComponent />
							</StyledCard>
						</Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <StyledCard elevation={1} title={"Your wallet"}>
              <WalletComponent wallet={wallet} walletData={walletData} />
            </StyledCard>
          </Grid>
        </Grid>
      </Box>

      <FindInvestmentComponent setResultsData={setResultsData} />

      {resultsData && (
        <InvestmentsResultsComponent
          clearResults={() => setResultsData(null)}
          resultsData={resultsData}
        />
      )}
    </DashboardContext.Provider>
  );
};

export default HomepageComponent;
