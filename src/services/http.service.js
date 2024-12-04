/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

// ** Config
// import authConfig from 'src/config/auth'

const instance = axios.create({
  // baseURL: "http://192.168.0.203:5000/api/v1", // SA
  // baseURL: "http://192.168.0.51:5000/api/v1", // MK
  // baseURL: "http://192.168.0.136:5000/api/v1", // QA
  // baseURL: "https://culturefy-backend.herokuapp.com/aspi/v1",
  baseURL: process.env.REACT_APP_BASE_URL,
  // timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  const storedToken = localStorage.getItem("accessToken");
  return {
    ...config,
    headers: {
      authorization: storedToken ? `Bearer ${storedToken}` : null,
    },
  };
});

export default instance;
