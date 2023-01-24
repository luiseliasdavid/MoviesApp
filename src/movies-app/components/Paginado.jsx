import Pagination from 'react-bootstrap/Pagination'


export const  Paginado = ({paginado,moviList,moviesPerPage,currentPage,setCurrentPage,paginas}) => {


  const pageNumbers = []
  
  for (let i = 1; i <= Math.ceil(moviList?.length / moviesPerPage); i++) {
    pageNumbers.push(i)
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
