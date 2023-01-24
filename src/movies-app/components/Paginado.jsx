import Pagination from 'react-bootstrap/Pagination'
import { useSelector } from 'react-redux'
import { usePagination } from '../../Hooks/usePagination'


export const  Paginado = () => {
  const moviList = useSelector((state) => state.movies.movies)
  const moviesPerPage= useSelector((state)=>state.movies.moviesPerPage)
  const currentPage = useSelector((state)=>state.movies.currentPage)
  const {
    paginado,
    handlePrev,
    handleNext,
    }=
  usePagination()
  const pageNumbers = []
  
  for (let i = 1; i <= Math.ceil(moviList?.length / moviesPerPage); i++) {
    pageNumbers.push(i)
  }
   return (
    <Pagination>
      {currentPage > 1 && <Pagination.Prev onClick={handlePrev} />}
      {pageNumbers?.map((number) => {
        return (
          <Pagination.Item
            active={number === currentPage}
            className="number"
            key={number}
            onClick={() => paginado(number)}
          >
            {number}
          </Pagination.Item>
        )
      })}

      {currentPage < pageNumbers.length && (
        <Pagination.Next onClick={handleNext} />
      )}
    </Pagination>
  )
}
