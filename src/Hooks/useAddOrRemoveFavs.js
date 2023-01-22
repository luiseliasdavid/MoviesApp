import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getMoviesFromApi } from '../redux/thunks'

export const useAddOrRemoveFavs = (e) => {
  const [favorites, setFavorites] = useState([])
  const dispatch = useDispatch()
  const favoritesIds= []

  for(let movie of favorites) favoritesIds.push(movie.id)

  useEffect(() => {
    const apiInfo = async () => {
      await dispatch(getMoviesFromApi())
    }
    apiInfo()
    const favsInLocal = localStorage.getItem('favs')

    if (favsInLocal !== null) {
      const favsArray = JSON.parse(favsInLocal)
      setFavorites(favsArray)
    }
  }, [dispatch])

  const favMovies = localStorage.getItem('favs')
  let tempsMoviesFavs

  if (favMovies === null) {
    tempsMoviesFavs = []
  } else {
    tempsMoviesFavs = JSON.parse(favMovies)
  }

  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget
    const parent = btn.parentElement
    const imageUrl = parent.querySelector('img').getAttribute('src')
    const title = parent.getElementsByClassName('card-title h5').item(0)
      .textContent
    const overView = parent.querySelector('p').textContent

    const movieData = {
      imageUrl,
      title,
      overView,
      id: btn.dataset.movieId,
    }

    let moviesIsInArray = tempsMoviesFavs.find((oneMovie) => {
      return oneMovie.id === movieData.id
    })

    if (!moviesIsInArray) {
      tempsMoviesFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempsMoviesFavs))
      setFavorites(tempsMoviesFavs)
    } else {
      let moviesLeft = tempsMoviesFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id
      })
      tempsMoviesFavs = moviesLeft
      setFavorites(tempsMoviesFavs)
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
    }
  }
  return {
    favorites,
    favoritesIds,
    addOrRemoveFromFavs,
  }
}
