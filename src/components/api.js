import axios from "axios";
import { key } from "./keys";

class MoviesDataService {
  getSearchedMovies(value, catogory) {
    return axios.get(
      `http://www.omdbapi.com/?apikey=${key}&s=${value}&type=${catogory}`
    );
  }
  getMovieById(ID) {
    return axios.get(`http://www.omdbapi.com/?apikey=${key}&i=${ID}`);
  }
}
export default new MoviesDataService();
