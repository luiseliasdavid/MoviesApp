
// estilos boostrap

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Buscador from './Buscador'

function Header (){
return(
    <header className='container p-3 my-3 border'>
        <div></div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="listado">Listado</Nav.Link>
            <Nav.Link href="contacto">Contacto</Nav.Link>
          </Nav>
        <Buscador />
        </Container>
      </Navbar>
      
    </header>
)

}

export default Header