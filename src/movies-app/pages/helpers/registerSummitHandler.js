export const registerSubmmitHandler = async (
  e,
  setError,
  userData,
  swal,
  singUp,
  navigate,
  regexEmail,
  login
) => {
  e.preventDefault()
  setError('')

  if (userData.email === '' || userData.password === '') {
    swal.fire({ title: 'Los campos no pueden estar vacios' })
    return
  }
  if (userData.email !== '' && !regexEmail.test(userData.email)) {
    swal.fire({ title: 'Escribir un formato valido' })
    return
  }

  try {
    await singUp(userData.email, userData.password)
    await login(userData.email, userData.password)
    navigate('/listado')
  } catch (err) {
    setError(err.code)
  }
}
