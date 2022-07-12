import axios from 'axios'
import swalert from '@sweetalert/with-react';
import {useNavigate,Navigate} from 'react-router-dom'


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
            swalert(
                <h2>Los campos no pueden estar vacios</h2>
            )
            return;
        }
        if (email!=='' && !regexEmail.test(email)){
            swalert(
                <h2>Escribir un formato valido</h2>
            )
            return;
        }
        if(email !== 'challenge@alkemy.org' || password!== 'react'){
            
            return
        }
        console.log('ok estamos listos')
        axios.post('http://challenge-react.alkemy.org',{email,password})
        .then( res=> {
            swalert(
                <h2>Perfecto, ingresaste correctamente</h2>
            )
            const tokenRecivido =res.data.token;
            localStorage.setItem('token',tokenRecivido)
            navigate('/listado')
        })

    }
    let token= localStorage.getItem('token')
    
    return(
           <>
           { token && <Navigate to='/listado'/>}
           <h2>Formulario de login</h2>
        <form onSubmit={submmitHandler} >
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
            
       </form>
       </>
    )
}