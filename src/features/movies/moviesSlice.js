import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const initialState = {
  movies: [],
  moviesCopia:[]
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies: (state, action) => {
        state.movies = action.payload
        state.moviesCopia= action.payload
      },  
    setMoviesState: (state,action)=> {
      
      state.movies= action.payload
  },
  returnState:(state)=>{
    return state.movies
  },
  
 }
})


export const  getMoviesFromApi =  () => (dispatch) => {
    let fetch = async ()=>{
    const apiGamesInfo = 5; 

    let pelis=[]
  
    for (let i = 1; i <= apiGamesInfo; i++) {
      let data =  await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES&page=${i}`)
    .then(res=>res.data.results)
    pelis.push(data)
}
dispatch(getMovies(pelis.flat()))
}
fetch()
}

export const orderByRating= (param)=>(dispatch)=>{
  
  let copy= [...param]
  let ascendente = copy.sort(function (a,b) {
    if (a.popularity > b.popularity) {
        return 1;
    }
    if (a.popularity < b.popularity) {
        return -1;
    }
    return 0
}
)
//console.log(ascendente)
let pepe =moviesSlice.actions.returnState()
console.log(initialState)
 dispatch(setMoviesState(ascendente))
}


// Action creators are generated for each case reducer function
export const { getMovies,setMoviesState } = moviesSlice.actions

export default moviesSlice.reducer
