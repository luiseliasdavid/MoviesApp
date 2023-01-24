import { Form, Card, Button, CardGroup } from 'react-bootstrap'
import './Listado.css'
import { Paginado, Buscador } from '../../components'
import { usePagination } from '../../../Hooks/usePagination'
import { handleOrder } from '../helpers/handleOrder'
import { handleOrderByGenre } from '../helpers/handleOrderByGenre'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

export const Listado = ({ favoritesIds, addOrRemoveFromFavs }) => {
  const dispatch = useDispatch()
  
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
  

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



 
  return (
    <div className='listado'>
      <div className="header2">
        <div className="select2">
          <Form.Select
            onChange={(e) => handleOrder(e, dispatch, moviListCopia)}
          >
            <option>Select by rating</option>
            <option>ascendente</option>
            <option>descendente</option>
          </Form.Select>

          <Form.Select
            onChange={(e) =>
              handleOrderByGenre(e, dispatch, moviListCopia, genres, setLoading)
            }
          >
            <option>All Genres</option>
            {genres?.map(({ id, name }) => (
              <option key={id}> {name} </option>
            ))}
          </Form.Select>
        </div>
        <Buscador className="buscador" />
      </div>
      <div className="paginado">
        <Paginado 
         paginado={paginado}
          moviList={moviList} 
          moviesPerPage={moviesPerPage} 
          currentPage={currentPage}  
          setCurrentPage={setCurrentPage}
          paginas={paginas}
          />
      </div>
      <div className="row">
        {loading === true && moviList.length === 0 && <h4>Cargando...</h4>}
        {loading === false && moviList.length === 0 && <h4>Sin elementos</h4>}

        {moviesToRender?.map((oneMovie, index) => {
          return (
            <div className="col-3" key={index}>
              <CardGroup>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  />
                  <Button
                    className="favourtite-btn"
                    onClick={addOrRemoveFromFavs}
                    data-movie-id={oneMovie.id}
                  >
                    {!favoritesIds?.includes(oneMovie.id.toString()) ? (
                      <i
                        className="bi bi-heart-fill"
                        style={{ fontSize: '1rem', color: 'black' }}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-heart-fill"
                        style={{ fontSize: '1rem', color: 'red' }}
                      ></i>
                    )}
                  </Button>
                  <Card.Body>
                    <Card.Title aria-label="Card.title">
                      {oneMovie.title.substring(0, 30)}...{' '}
                    </Card.Title>
                    <Card.Text>
                      {oneMovie.overview.substring(0, 150)}...
                    </Card.Text>
                    <Button
                      href={`/detalle?movieID=${oneMovie.id}`}
                      variant="primary"
                    >
                      Detalle
                    </Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          )
        })}
      </div>
      <div className="paginado">
      <div className="paginado">
        <Paginado 
         paginado={paginado}
          moviList={moviList} 
          moviesPerPage={moviesPerPage} 
          currentPage={currentPage}  
          setCurrentPage={setCurrentPage}
          paginas={paginas}
          />
      </div>
        
      </div>
      
    </div>
  )
}
