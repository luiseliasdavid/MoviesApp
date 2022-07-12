import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Card, Button, CardGroup } from 'react-bootstrap';




export default function Listado() {
  let token = localStorage.getItem('token');


  //const navigate= useNavigate()

  //otra forma de de redirigir si no  esta logueado
  // useEffect(()=>{
  //     const token= localStorage.getItem('token')
  //    if(token===null){
  //      navigate('/')}
  // },[navigate])
  const [moviList, setMoviList] = useState([]);

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES&page=1';
    axios.get(endPoint)
      .then(response => {
        const apiData = response.data.results
        setMoviList(apiData)
      }
      )
  }, [setMoviList])

  console.log(moviList)
  return (
    <>
      {!token && <Navigate to='/' />}

      <div className='row'>
        {
        moviList.map((oneMovie,index)=>{ 
          return ( 
        <div className='col-3' key={index} >
           <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} />
            <Card.Body>
              <Card.Title>{oneMovie.title.substring(0,30)}... </Card.Title>
              <Card.Text>
                {oneMovie.overview.substring(0,150)}...
              </Card.Text>
              <Button href='/' variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
</CardGroup>
        </div>
          )
         })
        }
      </div>
      
    </>
  )
}