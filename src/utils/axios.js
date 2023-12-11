import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://dummyjson.com",
});

export default customFetch;
