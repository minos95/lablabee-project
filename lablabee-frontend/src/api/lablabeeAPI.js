import axios from "axios"; //axios library remplace fetch

// create instance  axios
export default axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});
