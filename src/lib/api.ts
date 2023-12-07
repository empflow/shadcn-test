import axios from "axios";
import getEnvVar from "./getEnvVar";

const baseURL = getEnvVar("API_BASE_URL");

const api = axios.create({
  baseURL,
});

export default api;
