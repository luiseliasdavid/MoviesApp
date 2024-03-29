import { Card, Button, CardGroup } from 'react-bootstrap'

export const Favoritos = (props) => {
  return (
    <>
      <h2>Seccion Favoritos</h2>
      <div className="row">
        {!props.favorites.length && (
          <div className="col-12 text-danger">No tienes favoritos</div>
        )}
        {props.favorites?.map((oneMovie, index) => {
          return (
            <div className="col-3" key={index}>
              <CardGroup>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src={oneMovie.imageUrl}
                    alt={'imagen'}
                  />
                  <Button
                    className="favourtite-btn"
                    onClick={props.addOrRemoveFromFavs}
                    data-movie-id={oneMovie.id}
                  >
                    🖤
                  </Button>
                  <Card.Body>
                    <Card.Title>
                      {oneMovie.title.substring(0, 30)}...{' '}
                    </Card.Title>
                    <Card.Text>
                      {oneMovie.overView.substring(0, 150)}...
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
      <br></br>
      <br></br>
      <p>.</p>
    </>
  )
}


