import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../redux/moviesSlice'

export const usePagination = () => {
  const moviList = useSelector((state) => state.movies.movies)
  const moviListCopia = useSelector((state) => state.movies.moviesCopia)
  const genres = useSelector((state) => state.movies.genres)
  const moviesPerPage = useSelector((state) => state.movies.moviesPerPage)
  const currentPage = useSelector((state) => state.movies.currentPage)

  const paginas = Math.ceil(moviList.length / moviesPerPage)
  const indexOfLastmovie = currentPage * moviesPerPage
  const indexOfFirstmovie = indexOfLastmovie - moviesPerPage
  let moviesToRender = moviList?.slice(indexOfFirstmovie, indexOfLastmovie)

  const dispatch = useDispatch()

  const paginado = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }

  function handleNext(e) {
    e.preventDefault()
    if (currentPage < paginas) {
      console.log(currentPage + 1)
      dispatch(setCurrentPage('next'))
    }
  }
  function handlePrev(e) {
    e.preventDefault()
    if (currentPage > 1) {
      dispatch(setCurrentPage('prev'))
    }
  }
   return {
    moviesToRender,
    paginas,
    genres,
    moviListCopia,
    moviesPerPage,
    moviList,
    paginado,
    handlePrev,
    handleNext,
    currentPage,
  }
}
