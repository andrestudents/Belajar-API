import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
export const getMoviesList = async () => {
    const movie = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    // cek di console
    // console.log({ movieList: movie })
    return movie.data.results
}
export const searchMovies = async (q) => {
    const search = await axios.get(q)
    return
}

