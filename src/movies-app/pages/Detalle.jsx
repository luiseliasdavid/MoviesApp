import { Navigate } from 'react-router-dom'
import { useDetail } from '../../Hooks/useDetail'

export const  Detalle = () => {

  let {oneError, movie} = useDetail()

  return (
    <>
      {oneError === 1 ? <Navigate to="/" /> : null}
      {!movie && <p>Cargando...</p>}
      {movie && (
        <>
          <h2>Detalle de la pelicula </h2>
          <div className="row">
            <div className="col-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="poster movie"
                className="card-img-top"
              />
            </div>
            <div className="col-8">
              <h5>Titulo: {movie.title}</h5>
              <h5>Fecha de estreno: {movie.release_date} </h5>
              <h5>Reseña:</h5>
              <p>{movie.overview} </p>
              <h5>Rating: {movie.vote_average} </h5>
              <h5>Generos:</h5>
              <ul>
                {movie.genres.map((oneGenre) => (
                  <li key={oneGenre.id}>{oneGenre.name} </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  )
}


