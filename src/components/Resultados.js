import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, CardGroup } from "react-bootstrap";
import swal from 'sweetalert'
import { Navigate } from "react-router-dom";

function Resultados() {
  
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");
  const [movieResults, setMovieResults] = useState([]);
  
  let token = sessionStorage.getItem("token");
  useEffect(() => {
    const endPoint=`https://api.themoviedb.org/3/search/movie?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES&page=1&include_adult=false&query=${keyword}`
    axios.get(endPoint)
    .then(response => {
      const movieData= response.data.results;
      if (movieData.length===0){
      swal({
        title: 'tu busqueda no arrojo resultados'
      }) }
      setMovieResults(movieData)
    })
    .catch( error=> {
      console.log(error)
    })
  },[keyword]
  );
  // https://api.themoviedb.org/3/search/movie?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES&page=1&include_adult=false

  //console.log(keyword);
  return (
    <>
    {!token && <Navigate to="/" />}
    <h2>Buscaste: {keyword}</h2> 
    {movieResults.length ===0 && <h3>No hay resultados</h3> }
      <div className="row">
        {movieResults.map((oneMovie, index) => {
          return (
            <div className="col-4" key={index}>
              <CardGroup>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  />
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
    </>
  );
}

export default Resultados;
