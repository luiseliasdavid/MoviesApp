import { useEffect, useState } from "react"
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
    let moviesToRender= moviList?.slice(indexOfFirstmovie, indexOfLastmovie)
    const [currentmovie, setcurrentmovie] = useState(moviesToRender);
    
    
  
    
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
      }
    
      function handleNext(e) {
        e.preventDefault()
        if (currentPage < paginas) {
          setCurrentPage(currentPage + 1)
        }
      setcurrentmovie(moviesToRender)
      }
      function handlePrev(e) {
        e.preventDefault()
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1)
        }
        setcurrentmovie(moviesToRender)
      }
       console.log('currentPage',currentPage)
  //    console.log(indexOfFirstmovie)
   //   console.log(indexOfLastmovie) 
      return ({
        moviesToRender,
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