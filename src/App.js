import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import Login from "./components/Login";
import Listado from './components/Listado'
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from './components/Detalle'
import Resultados from './components/Resultados';
import Favoritos from './components/Favoritos';
import './App.css'
import {AuthProvider} from './authContext/authContext'

function App() {
  const [favorites,setFavorites] = useState([])

useEffect(()=>{
    const favsInLocal = localStorage.getItem('favs')

    if(favsInLocal !== null){
      const favsArray = JSON.parse(favsInLocal)
      setFavorites(favsArray)
    }

},[]
)

  const favMovies= localStorage.getItem('favs')
  let tempsMoviesFavs

  if(favMovies===null){
     tempsMoviesFavs= [];
  } else {
    tempsMoviesFavs= JSON.parse(favMovies)
   
  }
 

  const addOrRemoveFromFavs = e => {
    const btn = e.currentTarget;
    const parent = btn.parentElement
    const imageUrl = parent.querySelector('img').getAttribute('src');
    const title = parent.getElementsByClassName('card-title h5').item(0).textContent
    const overView = parent.querySelector('p').textContent

    const movieData = {
      imageUrl, title, overView,
      id: btn.dataset.movieId
    }
    

    let moviesIsInArray = tempsMoviesFavs.find( oneMovie => {
    return oneMovie.id===movieData.id
    });
   

    if (!moviesIsInArray){
      tempsMoviesFavs.push(movieData);
      localStorage.setItem('favs',JSON.stringify(tempsMoviesFavs))
      setFavorites(tempsMoviesFavs)
      console.log('se agrego la pelicula')
    } else {
       console.log('la peli ya estaba en el array sera removida')      
      let moviesLeft = tempsMoviesFavs.filter( oneMovie => {
        return oneMovie.id !== movieData.id
      })
      tempsMoviesFavs=moviesLeft
      setFavorites(tempsMoviesFavs)
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
    }

    
  }

    return (
      <div className='container'>
        <AuthProvider>
        <Header favorites={favorites}/>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/listado' element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
          <Route path='/detalle' element={<Detalle />} />
          <Route path='/resultados' element={<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />
          <Route path='/favoritos' element={<Favoritos favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />

        </Routes>

        <Footer />
      </AuthProvider> 
      </div>
    );
  }

  export default App;
