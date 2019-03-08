import axios from "axios";

const api = axios.create({
  baseURL: "http://locahlhost:8080"
});

export default api;
