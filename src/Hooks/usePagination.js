import { useState } from "react"
import { useSelector } from "react-redux"


export const usePagination = () => {
    const moviList = useSelector((state) => state.movies.movies)
    const moviListCopia = useSelector((state) => state.movies.moviesCopia)
    const genres = useSelector((state) => state.movies.genres)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const moviesPerPage = 15
  
    const paginas = Math.ceil(moviList.length / moviesPerPage)
  
    const indexOfLastmovie = currentPage * moviesPerPage
    const indexOfFirstmovie = indexOfLastmovie - moviesPerPage
    const currentmovie = moviList?.slice(indexOfFirstmovie, indexOfLastmovie)
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
      }
    
      function handleNext(e) {
        e.preventDefault()
        if (currentPage < paginas) {
          setCurrentPage(currentPage + 1)
        }
      }
      function handlePrev(e) {
        e.preventDefault()
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1)
        }
      }

      return ({
        loading,
        paginas,
        genres,
        setLoading,
        moviListCopia,
        currentmovie,
        moviesPerPage,
        moviList,
        paginado,
        handlePrev,
        handleNext,
        currentPage,
      })

}