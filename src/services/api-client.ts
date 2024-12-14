import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0cbd5b976d9648ed89a375e927267793",
  },
});
