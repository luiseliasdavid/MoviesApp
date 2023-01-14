import { setMoviesState } from "../moviesSlice"

export const getMoviesByGenre = (movilist, genres, genre) => (dispatch) => {
    let selectGenre = genres.filter((item) => item.name === genre)
  
    if (selectGenre.length === 0) return dispatch(setMoviesState([]))
    let id = selectGenre[0].id
    let result = movilist.filter((item) => item.genre_ids.includes(id))
    dispatch(setMoviesState(result))
  }