import axios from 'axios'
import swal from 'sweetalert'

import {useNavigate,Navigate} from 'react-router-dom'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../authContext/authContext';
import { async } from '@firebase/util';
import Alert from 'react-bootstrap/Alert';




export default function Login() {
  const regexEmail= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  const [userData,setUserData] = useState({
    email:'',
    password: ''
  })

  const {user} = useAuth()

  const [error,setError]= useState('')

    const navigate= useNavigate();

    const {login} =useAuth()

    const handleChange = ({target: {name, value}}) =>{

    setUserData({...user,[name]:value})}

    const submmitHandler = async(e)=> {
        e.preventDefault()
        setError('')

        if(userData.email==='' || userData.password===''){
            swal(
                
                { title: "Los campos no pueden estar vacios"}
            )
            return;
        }
        if (userData.email!=='' && !regexEmail.test(userData.email)){
          swal(
            { title:'Escribir un formato valido'}
            )
            return;
          }
          

        try{
          await login(userData.email,userData.password)
          navigate('/listado')
      }
      
      catch (err) {
               setError(err.code)
      }
    }
    
     
    //let token= sessionStorage.getItem('token')
    
    return(
           <>
           { error && <p> {error} </p>}
           { user && <Navigate to='/listado'/>}
           <h2>Formulario de login</h2>
       <div className='row'>
           <Form onSubmit={submmitHandler} className='col-3' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' name='email' placeholder="Enter email" onChange={handleChange} />
        { userData.password.length>1 && !regexEmail.test(userData.email) && <p textcolor ='red'>
          email debe ser un formato valido
        </p> }
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control minLength={6} type='password' name='password' placeholder="Password" onChange={handleChange}/>
        { userData.password.length<6 && userData.password.length>1 &&<Alert variant={'warning'} >
          password debe tener 6 caracteres al menos
        </Alert> }
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
       </div>
       <br/>
       <br/>
       <br/>
       <div>.</div>
       </>
    )
}
        /* <form onSubmit={submmitHandler} >
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
            
       </form> */

                 // if(email !== 'challenge@alkemy.org' || password!== 'react'){
              
          //     return
          // }
          
          // console.log('ok estamos listos')
          // axios.post('http://challenge-react.alkemy.org',{email,password})
          // .then( res=> {
          //     swal(
          //         { title: "Ingresaste correctamente"}
          //     )
          //     const tokenRecivido =res.data.token;
          //     sessionStorage.setItem('token',tokenRecivido)
          //     navigate('/listado')
          // })