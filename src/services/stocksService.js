import * as stocksApi from "./_stocksApi";
import { STOCKS_SYMBOLS } from "../constants/stocks";

export const getStocksPrices = () =>
  stocksApi
    .get(`intraday/latest?&symbols=${STOCKS_SYMBOLS.join(",")}`)
    .then((res) => {
      return res.status === 200 && { data: res.data.data };
    });

export const getStocksByPrice = (amount) =>
  stocksApi
    .get(`intraday/latest?&symbols=${STOCKS_SYMBOLS.join(",")}`)
    .then((res) => {
      return (
        res.status === 200 && [...res.data.data.filter((t) => t.last <= amount)]
      );
    });

export const getStocksByList = (stocksList) =>
  stocksApi
    .get(`intraday/latest?&symbols=${stocksList.join(",")}`)
    .then((res) => {
      return (
        res.status === 200 && res.data.data
      );
    });
