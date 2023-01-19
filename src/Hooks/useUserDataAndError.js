import { useState } from "react"


export const useUserDataAndError = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')

  return ({
    userData,
    setUserData,
    error,
    setError
  })
}