
// estilos boostrap

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header (){
return(
    <header>
        <div></div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="listado">Listado</Nav.Link>
            <Nav.Link href="contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       {/* <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='Listado'>Listado</Link>
            </li>
            <li>
                <Link to='Contacto'>Contacto</Link>
            </li>
        </ul>
       </nav> */}
    </header>
)

}

export default Header