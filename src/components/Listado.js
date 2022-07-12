import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Card, Button } from 'react-bootstrap';




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
        <div className='col-3' >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button href='/' variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </div>

      </div>
    </>
  )
}