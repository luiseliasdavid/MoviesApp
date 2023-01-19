import { orderByRating } from "../../../redux/utils"


export const handleOrder = (e,dispatch,moviListCopia)=> {
    let typeOrder = e.target.value
    dispatch(orderByRating(moviListCopia, typeOrder))
  }