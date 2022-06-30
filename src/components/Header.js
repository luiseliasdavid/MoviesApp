import {Link} from 'react-router-dom'

function Header (){
return(
    <header>
       <nav>
        <ul>
            <li>
                <Link to='home'>Home</Link>
            </li>
            <li>
                <Link to='Listado'>Listado</Link>
            </li>
            <li>
                <Link to='Contacto'>Contacto</Link>
            </li>
        </ul>
       </nav>
    </header>
)

}

export default Header