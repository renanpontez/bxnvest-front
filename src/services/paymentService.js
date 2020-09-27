import { CRYPTOCURRENCY, STOCK } from "../constants/general";

export const requestPaymentCrypto = async (cryptoData, amount) => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); //fake loading payment
  return {
    success: true,
    data: {
      symbol: cryptoData.symbol,
      type: CRYPTOCURRENCY,
      volume: (amount / cryptoData.regularMarketPrice).toFixed(6),
      amount: amount,
      date: new Date(),
    }
  };
};

export const requestPaymentStock = async (stockData, quantity) => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); //fake loading payment
  return {
    success: true,
    data: {
      symbol: stockData.symbol,
      type: STOCK,
      volume: quantity,
      amount: quantity * stockData.last,
      date: new Date(),
    }
  };
};
