import axios from 'axios'
import swal from 'sweetalert'
import {useNavigate,Navigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//usuario:challenge@alkemy.org  pass:react
export default function Login() {
    
    const navigate= useNavigate();
    
    const submmitHandler = (e)=> {
        e.preventDefault()
        const email= e.target.email.value;
        const password= e.target.password.value;
        const regexEmail= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        //console.log(regexEmail.test(email))
        if(email==='' || password===''){
            swal(
                
                { title: "Los campos no pueden estar vacios"}
            )
            return;
        }
        if (email!=='' && !regexEmail.test(email)){
            swal(
                { title:'Escribir un formato valido'}
            )
            return;
        }
        if(email !== 'challenge@alkemy.org' || password!== 'react'){
            
            return
        }
        console.log('ok estamos listos')
        axios.post('http://challenge-react.alkemy.org',{email,password})
        .then( res=> {
            swal(
                { title: "Ingresaste correctamente"}
            )
            const tokenRecivido =res.data.token;
            sessionStorage.setItem('token',tokenRecivido)
            navigate('/listado')
        })

    }
    let token= sessionStorage.getItem('token')
    
    return(
           <>
           { token && <Navigate to='/listado'/>}
           <h2>Formulario de login</h2>
        {/* <form onSubmit={submmitHandler} >
            <label>
                <span>Correo electronico:</span><br/>
           <input type='email' name='email'/>
           </label>
           <br/>
           <label>
            <span>Contraseña:</span><br/>
           <input type='password' name='password'/>
           </label>
           <br/>
           <button type='submit'>Ingresar</button>
            
       </form> */}
       <div className='row'>
           <Form onSubmit={submmitHandler} className='col-3' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' name='password' placeholder="Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
       </div>
       </>
    )
}