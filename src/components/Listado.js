import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, CardGroup } from "react-bootstrap";
import swal from "sweetalert";
import './Listado.css'
import { useAuth } from "../authContext/authContext";


export default function Listado(props) {
  
  const authContext= useAuth()

  //console.log(authContext.user)

  let token = sessionStorage.getItem("token");



  
  //const navigate= useNavigate()

  //otra forma de de redirigir si no  esta logueado
  // useEffect(()=>{
  //     const token= localStorage.getItem('token')
  //    if(token===null){
  //      navigate('/')}
  // },[navigate])
  const [moviList, setMoviList] = useState([]);

  useEffect( () => {

    const getPelis =  async() => {
      const apiGamesInfo = 5; 
     
      let pelis=[]
    
      for (let i = 1; i <= apiGamesInfo; i++) {
        pelis.push(await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES&page=${i}`)
      .then(res=>res.data.results))}
        
        setMoviList(pelis.flat())
         }
    getPelis()
   
}, [setMoviList]);

  
 
  return (
    <>
      {/* {!token && <Navigate to="/" />} */}

      <div className="row">
        {moviList?.map((oneMovie, index) => {
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
      <br></br>
      <br></br>
      <p>.</p>
    </>
  );
}

/*

const getApiInfo =  () => {
  const apiGamesInfo = 5; 
 
  let pelis=[]

  for (let i = 1; i <= apiGamesInfo; i++) {
    pelis.push(axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES&page=i`).then(res=>res.data.results))}
    
    return Promise.all(nonstop)
     .then(res=>console.log(res))

*/
/*
const getApiInfo =  () => {
  const apiGamesInfo = 5; 
 
  let pelis=[]

  for (let i = 1; i <= apiGamesInfo; i++) {
    pelis.push(axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES&page=i`).then(res=>res.data.results))}
    
    return Promise.all(nonstop)
     .then(res=>console.log(res))
*/
