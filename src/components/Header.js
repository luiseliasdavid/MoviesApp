
// estilos boostrap

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Buscador from './Buscador'

function Header (props){
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
        <Nav className="me-auto">
        <Nav.Link href='login' variant="red">Login</Nav.Link>
        <Nav.Link href='register' variant="red">Register </Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
    </header>
)

}

export default Header