import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  movies: [],
  moviesCopia: [],
  genres: [],
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload
      state.moviesCopia = action.payload
    },
    setMoviesState: (state, action) => {
      state.movies = action.payload
    },
    getGenres: (state, action) => {
      state.genres = action.payload
    },
  },
})
export const getMoviesByGenre = (movilist, genres, genre) => (dispatch) => {
  let selectGenre = genres.filter((item) => item.name === genre)

  if (selectGenre.length === 0) return dispatch(setMoviesState([]))
  let id = selectGenre[0].id
  let result = movilist.filter((item) => item.genre_ids.includes(id))
  dispatch(setMoviesState(result))
}

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

export const orderByRating = (estado, orden) => (dispatch) => {
  let newOrder = []
  let copy = [...estado]
  if (orden === 'ascendente') {
    newOrder = copy.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return 1
      }
      if (a.popularity < b.popularity) {
        return -1
      }
      return 0
    })
  }
  if (orden === 'descendente') {
    newOrder = copy.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1
      }
      if (a.popularity < b.popularity) {
        return 1
      }
      return 0
    })
  }
  dispatch(setMoviesState(newOrder))
}

// Action creators are generated for each case reducer function
export const { getMovies, setMoviesState, getGenres } = moviesSlice.actions

export default moviesSlice.reducer
