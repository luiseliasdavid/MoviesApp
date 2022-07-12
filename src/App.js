import {Routes, Route } from 'react-router-dom'
 import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login";
import Listado from './components/Listado'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className='container'>
    <Header/>
  
    <Routes>
      <Route exact path='/' element={<Login/>} />
      
      
      <Route path='/listado' element={<Listado/>} />
     </Routes>
     
     <Footer/>
     </div>
  );
}

export default App;
