import axios from 'axios'
import { getGenres, getMovies } from './moviesSlice'

export const getMoviesFromApi = () => (dispatch) => {
  const { REACT_APP_MOVIES_URL, REACT_APP_MOVIES_GENRES } = process.env

  let fetch = async () => {
    const apiGamesInfo = 5

    let pelis = []

    for (let i = 1; i <= apiGamesInfo; i++) {
      let data = await axios
        .get(`${REACT_APP_MOVIES_URL}${i}`)
        .then((res) => res.data.results)
      pelis.push(data)
    }
    dispatch(getMovies(pelis.flat()))
    let genres = await axios.get(`${REACT_APP_MOVIES_GENRES}`)
    dispatch(getGenres(genres.data.genres))
  }
  fetch()
}
