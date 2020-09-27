import axios from "axios";

const API_URL = process.env.CRYPTO_API;
const API_KEY = process.env.CRYPTO_API_KEY;

const api = axios.create({
  baseURL: API_URL,
  headers: { 
    "Content-Type": "application/json", 
    "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "X-RapidAPI-Key": API_KEY
  },
});

const get = url => api.get(`${url}&region=US`);

export { get };
