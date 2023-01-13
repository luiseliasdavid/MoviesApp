import axios from "axios"
import { getGenres, getMovies } from "./moviesSlice"


export const getMoviesFromApi = () => (dispatch) => {
    let fetch = async () => {
      const apiGamesInfo = 5
  
      let pelis = []
  
      for (let i = 1; i <= apiGamesInfo; i++) {
        let data = await axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES&page=${i}`,
          )
          .then((res) => res.data.results)
        pelis.push(data)
      }
      dispatch(getMovies(pelis.flat()))
      let genres = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=cc18eb38317f2c9aed2478c00153198a&language=en-US',
      )
      dispatch(getGenres(genres.data.genres))
    }
    fetch()
  }
  