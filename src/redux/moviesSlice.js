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

export const { getMovies, setMoviesState, getGenres } = moviesSlice.actions
export default moviesSlice.reducer
