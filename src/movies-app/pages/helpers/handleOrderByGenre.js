import { getMoviesByGenre } from '../../../redux/utils'

export const handleOrderByGenre = (
  e,
  dispatch,
  moviListCopia,
  genres,
  setLoading,
) => {
  setLoading(true)
  let genre = e.target.value

  dispatch(getMoviesByGenre(moviListCopia, genres, genre))

  setLoading(false)
}
