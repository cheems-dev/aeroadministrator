import axios from "axios";
import { getCookie } from "react-use-cookie";
import { URL } from "../config/api.config";

const instance = axios.create({
  baseURL: URL,
});

instance.interceptors.request.use((config) => {
  const myConfig = config;
  const token = getCookie("token");
  myConfig.headers.Authorization = token ? `Bearer ${token}` : "";
  return myConfig;
});

export default instance;
