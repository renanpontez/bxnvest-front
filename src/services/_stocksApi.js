import axios from "axios";

const API_URL = process.env.STOCK_API;

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

const auth = (path) => `${path}&access_key=${process.env.STOCK_API_KEY}`;
const get = (path) => api.get(auth(path));

export { get };
