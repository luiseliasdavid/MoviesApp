import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert'
import axios from 'axios';

function Detalle (){
    let token= sessionStorage.getItem('token')
   
    let query= new URLSearchParams(window.location.search)
    let movieID= query.get('movieID')

    

    //console.log(movieID)
const [movie, setMovie]= useState(null)
const [oneError, setOneError] = useState(null)

   useEffect (()=> {
       const endPoint= `https://api.themoviedb.org/3/movie/${movieID}?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES`
       axios.get(endPoint)
       .then(response=> {
           const movieData= response.data;
           setMovie(movieData)
           
        })
        .catch(error => { 
        
            swal({title:error.message})
            setOneError(1)
    })
},[movieID] 
   ) // eslint-disable-line react-hooks/exhaustive-deps
   

    return(
    <>
    {/* {!token || oneError===1? <Navigate to='/'/>:null } */}
    { oneError===1? <Navigate to='/'/>:null }
    {!movie && <p>Cargando...</p> }
    {/* {error && <h3>Hubo un error ,vuelve al listado</h3>} */}
    {movie && <>
        <h2>Detalle de la pelicula </h2>
        <div className='row'>
            <div className='col-4'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` } alt='poster movie' className='card-img-top'/>
            </div>
            <div className='col-8'>
                <h5>Titulo: {movie.title}</h5>
                <h5>Fecha de estreno: {movie.release_date} </h5>
                <h5>Reseña:</h5>
                <p>{movie.overview} </p>
                <h5>Rating: {movie.vote_average} </h5>
                <h5>Generos:</h5>
                <ul>
                   {movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name} </li>)}
                </ul>
            </div>
        </div>
        </>}
    </>
    )
}

export default Detalle;