import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  movies: [],
  moviesCopia: [],
  genres: [],
  moviesPerPage : 15,
  loading: true,
  currentPage:1
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
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setCurrentPage: (state, action) =>{
      if(action.payload==='next')
      {state.currentPage += 1}
      if(action.payload==='prev')
      {state.currentPage -= 1}
      if(typeof(action.payload)==='number') {state.currentPage= action.payload}
        }
  },
})

export const { getMovies, setMoviesState, getGenres , setLoading, setCurrentPage } = moviesSlice.actions
export default moviesSlice.reducer
