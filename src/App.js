import {Routes, Route } from 'react-router-dom'
 import Login from "./components/Login";
 import Listado from './components/Listado'


function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route path='/listado' element={<Listado/>} />
     </Routes>
    </>
  );
}

export default App;
