import axios from "axios";
/**base url to make request to the movies database */

const instance = axios.create({
  baseURL: "//api.themoviedb.org/3",
});

export default instance;
