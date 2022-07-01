import {useNavigate} from 'react-router-dom';
import { useEffect} from 'react';
import { Card,Button } from 'react-bootstrap';

console.log(Card) 

export default function Listado (){
    const navigate= useNavigate()
    
    useEffect(()=>{
        const token= localStorage.getItem('token')
       if(token===null){
         navigate('/')}
    },[navigate])
    
    return (
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
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    
</div>
    </div>
    )
}