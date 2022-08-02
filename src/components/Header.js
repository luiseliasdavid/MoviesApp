
// estilos boostrap
import { useAuth } from '../authContext/authContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import Buscador from './Buscador'


function Header (props){

  const {user, logout} = useAuth()
  
  
const handleLogout = async () =>{
  await logout()
}
console.log(user?.photoURL)
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
        <Buscador />
        {!user &&
        <>
        <Nav className="me-auto">
        <Nav.Link href='login' variant="red">Login</Nav.Link>
        <Nav.Link href='register' variant="red">Register </Nav.Link>
        </Nav>
        </>}
        { user && <>
          <Nav className="me-auto">
          {/* <Nav.Link href='#' variant="red">welcome: {user.email} </Nav.Link> */}
         
      
        <img src={user.photoURL} alt={user.name} />
        <h2>{user.displayName}</h2>
        <p>Email: {user.email}</p>
      
    
          <Button onClick={handleLogout} size="sm" variant="outline-danger">LogOut</Button>
          </Nav>
        </>

        }
        </Container>
      </Navbar>
      
    </header>
)

}

export default Header