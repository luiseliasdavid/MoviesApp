import Swal from "sweetalert2"
import { validateKeyword } from "./ValidateInputSubmmit"


export  const loginSubmmitHandler = async (e,setError,userData,login,navigate) => {
    e.preventDefault()
    setError('')

    if (validateKeyword(userData)) {
      Swal.fire({ title: validateKeyword(userData) })
      return
    }

    try {
      await login(userData.email, userData.password)
      navigate('/listado')
    } catch (err) {
      setError(err.code)
    }
  }