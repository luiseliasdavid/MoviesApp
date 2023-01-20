import Pagination from 'react-bootstrap/Pagination'
import { usePagination } from '../../Hooks/usePagination'

export const  Paginado = () => {

  let {
    moviesPerPage,
    moviList,
    paginado,
    handlePrev,
    handleNext,
    currentPage,
  } = usePagination()
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(moviList / moviesPerPage); i++) {
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