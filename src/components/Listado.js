
import { useEffect, useState} from "react";
import axios from "axios";
import { Card, Button, CardGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux/es/exports";
import './Listado.css'
//import { useAuth } from "../authContext/authContext";
import Paginado from './Paginado';
import Buscador from './Buscador'
import Form from 'react-bootstrap/Form'
import { setMoviesState } from "../features/movies/moviesSlice";
import { orderByRating, getMoviesByGenre } from "../features/movies/moviesSlice";
import { current } from "@reduxjs/toolkit";


export default function Listado(props) {
  
 
  
  const moviList =  useSelector(state=> state.movies.movies)
  const moviListCopia = useSelector(state=> state.movies.moviesCopia)
  const genres = useSelector(state=> state.movies.genres)
  
  const dispatch = useDispatch()

  const [loading,setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage =15
  

  const paginas = Math.ceil(moviList.length / moviesPerPage);

  const indexOfLastmovie = currentPage * moviesPerPage; //6
  const indexOfFirstmovie = indexOfLastmovie - moviesPerPage; //0
  const currentmovie = moviList?.slice(indexOfFirstmovie,indexOfLastmovie);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
    
  };



function handleNext(e) {
  e.preventDefault();
  if (currentPage < paginas) {
    setCurrentPage(currentPage + 1);
  }
}
function handlePrev(e) {
  e.preventDefault();
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
}
function handleOrder (e){
  console.log(e.target.value)
  let typeOrder = e.target.value
  dispatch(orderByRating(moviListCopia, typeOrder))
 
}
function handleOrderByGenre (e){
  setLoading(true)
  let genre= e.target.value
  
  dispatch(getMoviesByGenre(moviListCopia,genres ,genre))
  
  setLoading(false)

  console.log(moviList)
}
  


  return (
    <>
      {/* {!token && <Navigate to="/" />} */}
      <div className="header2">
      <div className="select2">
      <Form.Select  onChange={(e)=>handleOrder(e)} >
        <option>Select by rating</option>
        
        <option>ascendente</option>
        <option>descendente</option>

      </Form.Select>

      <Form.Select  onChange={(e)=>handleOrderByGenre(e)}>
        <option>Select by Genre</option>
        <option>All Genres</option>
        <option>Action</option>
        <option>Adventure</option>
        <option>Animation</option>
        <option>Crime</option>
        <option>Comedy</option>
        <option>Documentary</option>
        <option>Family"Drama</option>
        <option>Fantasy</option>
        <option>History</option>
        <option>Horror</option>
        <option>Music</option>
        <option>Mystery</option>
        <option>Romance</option>
        <option>Science</option>
        <option>Fiction</option>
        <option>TV Movie</option>
        <option>Thriller</option>
        <option>War</option>
        <option>Western</option>
        
      </Form.Select>
      </div>
      <Buscador className="buscador" />
      </div>
      <div className="paginado">

      <Paginado 
      className='paginado'
              paginas={paginas}
              handleNext = {handleNext}
              handlePrev = {handlePrev}
              moviesPerPage={moviesPerPage}
              moviList={moviList.length}
              paginado={paginado}
              currentPage={currentPage}
              
            />
            </div>
      <div className="row">
        {loading===true  && moviList.length===0 && <h4>Cargando...</h4>}
        {loading===false &&  moviList.length===0 && <h4>Sin elementos</h4>}
       
        {currentmovie?.map((oneMovie, index) => {
          return (
            <div className="col-3" key={index}>
              <CardGroup>

                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  />
                  <Button className="favourtite-btn" 
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={oneMovie.id}
                  >🖤</Button>
                  <Card.Body>
                    <Card.Title>
                      {oneMovie.title.substring(0, 30)}...{" "}
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
          );
        })}
      </div>
      <div className="paginado">
      <Paginado
              paginas={paginas}
              handleNext = {handleNext}
              handlePrev = {handlePrev}
              moviesPerPage={moviesPerPage}
              moviList={moviList.length}
              paginado={paginado}
              currentPage={currentPage}
            />
      <br></br>
      <br></br>
      <br></br>
            <p>.</p>
            </div>
      <br></br>
      <br></br>
      <p>.</p>
    </>
  );
}


//   const getPelis =  async() => {

//     const apiGamesInfo = 5; 
   
//     let pelis=[]
  
//     for (let i = 1; i <= apiGamesInfo; i++) {
//       pelis.push(await axios.get(
//     `https://api.themoviedb.org/3/discover/movie?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES&page=${i}`)
//     .then(res=>res.data.results))}
      
//       setMoviList(pelis.flat())
//        }
     
//   useEffect( () => {
//     setMoviList(moviList.movie)
    
// }, []);

// para buscar por genero https://api.themoviedb.org/3/discover/movie?api_key=cc18eb38317f2c9aed2478c00153198a&language=en-US&with_genres=

