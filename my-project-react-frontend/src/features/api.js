import axios from "axios";

let baseURL = import.meta.env.VITE_API_DEV_URL;
export const http = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
