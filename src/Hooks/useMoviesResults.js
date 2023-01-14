import { useEffect, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert2'

export const useMoviesResults = () => {
  let query = new URLSearchParams(window.location.search)
  let keyword = query.get('keyword')
  const [movieResults, setMovieResults] = useState([])

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES&page=1&include_adult=false&query=${keyword}`
    axios
      .get(endPoint)
      .then((response) => {
        const movieData = response.data.results
        if (movieData.length === 0) {
          swal.fire({
            title: 'tu busqueda no arrojo resultados',
          })
        }
        setMovieResults(movieData)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [keyword])

  return {
    movieResults,
    keyword,
  }
}
