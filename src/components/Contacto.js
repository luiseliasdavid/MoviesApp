import './Contacto.css'
import { Link } from "react-router-dom";



function Contacto (){
  

    return(
    <>

    { <>
        <h2>Luis David</h2>
        <div className='row'>
            <div className='col-8'>
                <h5>Desarrollador web Full Stack</h5>
                <h5>¡Hola! Soy Luis, soy Desarrollador Web Full Stack. Me apasiona resolver problemas y aprender nuevas tecnologías.
He trabajado en proyectos grupales de e-comerce utilizando React, redux, Node, Sequalize ,PostgreSQL, Firebase, entre otras tecnologias.
Actualmente buscando empleo en modalidad remoto.</h5>
                <h5>Movies app</h5>
                <p>En este proyecto en desarrollo he manejado props atravez de componentes.
                     Tambien utilize context para que todos los componentes tengan acceso al 
                     usuario manejado con firebase. y Como muestra de utilizacion de redux tambien 
                     lo implemente para los ordenamientos de los select.</p>

                <h5>Contacto</h5>
                <a href='https://github.com/luiseliasdavid'>  <i className="bi bi-github" ></i></a>
                <a href='https://www.linkedin.com/in/luis-elias-david/'><i className="bi bi-linkedin"></i></a>
                
                <a onClick={() => window.location = 'mailto:luis.elias.david@gmail.com'}><i className="bi bi-envelope-fill"></i></a>
                <h5>...</h5>
                <ul>
                   <li>...</li>
                </ul>
            </div>
            <div className='col-4'>
                <img src={`https://media-exp1.licdn.com/dms/image/D4D35AQEBmz86QAE77g/profile-framedphoto-shrink_200_200/0/1654397506845?e=1661367600&v=beta&t=Dt6DfhZVfh3EY1eesMda8sARck0U_5LaQx0rCXphPNk` } alt='poster movie' className='perfil' />
            </div>
        </div>
        </>}
    </>
    )
}

export default Contacto;