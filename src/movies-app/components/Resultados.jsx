import { Card, Button, CardGroup } from 'react-bootstrap'
import { useMoviesResults } from '../../Hooks/useMoviesResults'

export const Resultados = () => {
  const { movieResults, keyword } = useMoviesResults()

  return (
    <>
      <h2>Buscaste: {keyword}</h2>
      {movieResults.length === 0 && <h3>No hay resultados</h3>}
      <div className="row">
        {movieResults.map((oneMovie, index) => {
          return (
            <div className="col-4" key={index}>
              <CardGroup>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  />
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
    </>
  )
}
