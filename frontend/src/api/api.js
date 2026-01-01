import axios from "axios";

const API = axios.create({
  baseURL: "https://notes-resolver.onrender.com",
  withCredentials: true, // if you want cookies later
});

export default API;
