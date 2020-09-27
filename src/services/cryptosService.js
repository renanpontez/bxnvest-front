import * as cryptosApi from "./_cryptosApi";
import { CRYPTO_SYMBOLS } from "../constants/cryptocurrencies";

export const getCryptos = async () => {
  const symbols = CRYPTO_SYMBOLS.map(crypto => `${crypto}-USD`);
  return cryptosApi
    .get(`market/v2/get-quotes?symbols=${symbols.join('%252C')}`)
    .then(res => {
      if(res.status === 200) {
        return res.data.quoteResponse.result;
      }
    });
};

export const getCryptosByList = async cryptosList => {
  return cryptosApi
    .get(`market/v2/get-quotes?symbols=${cryptosList.join('%252C')}`)
    .then(res => {
      if(res.status === 200) {
        return res.data.quoteResponse.result;
      }
    });
}