import { setMoviesState } from "../moviesSlice"

export const orderByRating = (estado, orden) => (dispatch) => {
    let newOrder = []
    let copy = [...estado]
    if (orden === 'ascendente') {
      newOrder = copy.sort(function (a, b) {
        if (a.popularity > b.popularity) {
          return 1
        }
        if (a.popularity < b.popularity) {
          return -1
        }
        return 0
      })
    }
    if (orden === 'descendente') {
      newOrder = copy.sort(function (a, b) {
        if (a.popularity > b.popularity) {
          return -1
        }
        if (a.popularity < b.popularity) {
          return 1
        }
        return 0
      })
    }
    dispatch(setMoviesState(newOrder))
  }