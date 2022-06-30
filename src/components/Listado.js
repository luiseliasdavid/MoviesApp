import {useNavigate} from 'react-router-dom';
import { useEffect} from 'react';


export default function Listado (){
    const navigate= useNavigate()
    
    useEffect(()=>{
        const token= localStorage.getItem('token')
       if(token===null){
         navigate('/')}
    },[])
    
    
    

    return (
    <h2>componente listado</h2>
    )
}