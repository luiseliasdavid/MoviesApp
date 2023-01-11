import swal from 'sweetalert2'

import {useNavigate,Navigate} from 'react-router-dom'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../authContext/authContext';
import Alert from 'react-bootstrap/Alert';
import { GoogleLoginButton } from "react-social-login-buttons"




export default function Login() {
  const regexEmail= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  
  const [userData,setUserData] = useState({
    email:'',
    password: ''
  })
  
  const {user} = useAuth()

  const [error,setError]= useState('')

    const navigate= useNavigate();

    const {login, loginWithGoogle} =useAuth()

    const handleChange = ({target: {name, value}}) =>{

    setUserData({...userData,[name]:value})}

    const submmitHandler = async(e)=> {
        e.preventDefault()
        setError('')

        if(userData.email==='' || userData.password===''){
            swal.fire(
                
                { title: "Los campos no pueden estar vacios"}
            )
            return;
        }
        // if (userData.email!=='' ){
        //   swal(
        //     { title:'Escribir un formato valido'}
        //     )
        //     return;
        //   }
          

        try{
          console.log(userData.email)
          await login(userData.email,userData.password)
          navigate('/listado')
      }
      
      catch (err) {
               setError(err.code)
      }
    }

 const handleGoogleSingin = async ()=>{
      await loginWithGoogle()
      navigate('/listado')
    }
     
    //let token= sessionStorage.getItem('token')
    
    return(
           <>
           { error && <p> {error} </p>}
           {/* { user && <Navigate to='/listado'/>} */}
           <h2>Formulario de login</h2>
       <div className='row'>
           <Form onSubmit={submmitHandler} className='col-3' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' name='email' placeholder="Enter email" onChange={handleChange} />
        { userData.password?.length>1 && <p textcolor ='red'>
          email debe ser un formato valido
        </p> }
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control minLength={6} type='password' name='password' placeholder="Password" onChange={handleChange}/>
        { userData.password?.length<6 && userData.password.length>1 &&<Alert variant={'warning'} >
          password debe tener 6 caracteres al menos
        </Alert> }
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <GoogleLoginButton onClick={handleGoogleSingin} />
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