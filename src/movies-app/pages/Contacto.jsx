import './Contacto.css'

function Contacto() {
  return (
    <>
      {
        <>
          <h2>Luis David</h2>
          <div className="row">
            <div className="col-12">
              <h5>Desarrollador web Full Stack</h5>
              <div>
                <img
                  style={{ height: '20vh' }}
                  src={`https://res.cloudinary.com/dxtfm6grq/image/upload/v1673564162/WhatsApp_Image_2021-01-25_at_20.49.02_or0awu.jpg`}
                  alt="profile"
                  className="perfil"
                />
                <h5>
                  ¡Hola! Soy Luis, soy Desarrollador Web Full Stack. Me apasiona
                  resolver problemas y aprender nuevas tecnologías. He trabajado
                  en proyectos grupales de e-comerce utilizando React, redux,
                  Node, Sequalize ,PostgreSQL, Firebase, entre otras
                  tecnologias. Actualmente buscando empleo en modalidad remoto.
                </h5>
              </div>
              <h5>Movies app</h5>
              <p>
                En este proyecto en desarrollo he manejado props atravez de
                componentes. Tambien utilize context para que todos los
                componentes tengan acceso al usuario manejado con firebase. y
                Como muestra de utilizacion de redux tambien lo implemente para
                los ordenamientos de los select.
              </p>

              <h5>Contacto</h5>
              <a href="https://github.com/luiseliasdavid">
                {' '}
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/luis-elias-david/">
                <i className="bi bi-linkedin"></i>
              </a>

              <div
                onClick={() =>
                  (window.location = 'mailto:luis.elias.david@gmail.com')
                }
              >
                <i className="bi bi-envelope-fill"></i>
              </div>
              <h5>...</h5>
              <ul>
                <li>...</li>
              </ul>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Contacto
