
import { Form, Card, Button, CardGroup } from 'react-bootstrap'
import './Listado.css'
import { Paginado, Buscador } from '../../components'
import { usePagination } from '../../../Hooks/usePagination'
import { handleOrder } from '../helpers/handleOrder'
import { handleOrderByGenre } from '../helpers/handleOrderByGenre'
import { useDispatch } from 'react-redux'

export const Listado = ({addOrRemoveFromFavs}) => {
  const dispatch = useDispatch()

  let {
    currentmovie,
    loading,
    setLoading,
    moviList,
    moviListCopia,
    genres,
  } = usePagination()

  return (
    <>
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
        <Paginado />
      </div>
      <div className="row">
        {loading === true && moviList.length === 0 && <h4>Cargando...</h4>}
        {loading === false && moviList.length === 0 && <h4>Sin elementos</h4>}

        {currentmovie?.map((oneMovie, index) => {
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
                    🖤
                  </Button>
                  <Card.Body>
                    <Card.Title>
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
        <Paginado />
        <br></br>
        <br></br>
        <br></br>
        <p>.</p>
      </div>
      <br></br>
      <br></br>
      <p>.</p>
    </>
  )
}
