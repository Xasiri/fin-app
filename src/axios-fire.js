import axios from "axios";

const instance = axios.create({
  baseURL: "https://tax-prototype.firebaseio.com//",
});

export default instance;
