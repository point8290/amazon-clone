import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-ba61e/us-central1/api", //API {cloud function} url
});

export default instance;