
// estilos boostrap
import { useAuth } from '../authContext/authContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import Buscador from './Buscador'
import Image from 'react-bootstrap/Image'
import { useEffect, useState } from 'react';
import './Header.css'


function Header (props){

  const {user, logout} = useAuth()
  const [userImg, setUserImg] = useState('')
  
  //console.log(user)
  useEffect(()=>{
    if(user !==null){
      setUserImg(user.photoURL.toString())
    }
  },[user])

const handleLogout = async () =>{
  await logout()
}
// console.log(user?.photoURL)
return(
    <header className='container p-3 my-3 border'>
        <div></div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movies App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="listado">Home</Nav.Link>
            <Nav.Link href="listado">Listado</Nav.Link>
            <Nav.Link href="favoritos">Favoritos</Nav.Link>
            <Nav.Link href="contacto">Contacto</Nav.Link>
            <Nav.Link href='#' variant="red">
              {props.favorites.length>0 && <> Favoritos:{props.favorites.length} </>}
              </Nav.Link>
          </Nav>
          </Container>
          <div className="cont2">
        {!user &&
        <>
        <Nav className="me-auto">
        <Nav.Link href='login' variant="red">Login</Nav.Link>
        <Nav.Link href='register' variant="red">Register </Nav.Link>
        </Nav>
        </>}
        {user && !user.displayName && <>
          <Nav.Link>welcome: {user.email}</Nav.Link>
        </>}
        { user && user.displayName && <>
          <Nav className="me-auto">
          {/* <Nav.Link href='#' variant="red">welcome: {user.email} </Nav.Link> */}
         
         <div className='name-buttom'>
        <Nav.Link className="me-auto">Welcome: {user.displayName}</Nav.Link>
          <Button onClick={handleLogout} size="sm" variant="outline-secondary">LogOut</Button>
        
         </div>
        {userImg && <Image roundedCircle={true} src={userImg} alt={user.name} />}
        
          </Nav>
        </>

        }
        </div>
      </Navbar>

      <Navbar>
      <Buscador />
      </Navbar>
      
    </header>
)

}

export default Header