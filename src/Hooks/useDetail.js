import { useEffect, useState } from 'react'
import swal from 'sweetalert2'
import axios from 'axios'


export const useDetail = () => {
  let query = new URLSearchParams(window.location.search)
  let movieID = query.get('movieID')

  const [movie, setMovie] = useState(null)
  const [oneError, setOneError] = useState(null)

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=cc18eb38317f2c9aed2478c00153198a&language=es-ES`
    axios
      .get(endPoint)
      .then((response) => {
        const movieData = response.data
        setMovie(movieData)
      })
      .catch((error) => {
        swal.fire({ title: error.message })
        setOneError(1)
      })
  }, [movieID])

return ({
oneError,
movie
})

}