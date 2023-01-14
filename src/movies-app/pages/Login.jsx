import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Alert from 'react-bootstrap/Alert'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { useAuth } from '../../authContext/authContext'

export const  Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')

  const navigate = useNavigate()

  const { login, loginWithGoogle } = useAuth()

  const handleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value })
  }

  const submmitHandler = async (e) => {
    e.preventDefault()
    setError('')

    if (userData.email === '' || userData.password === '') {
      swal.fire({ title: 'Los campos no pueden estar vacios' })
      return
    }

    try {
      console.log(userData.email)
      await login(userData.email, userData.password)
      navigate('/listado')
    } catch (err) {
      setError(err.code)
    }
  }

  const handleGoogleSingin = async () => {
    await loginWithGoogle()
    navigate('/listado')
  }

  return (
    <>
      {error && <p> {error} </p>}
      <h2>Formulario de login</h2>
      <div className="row">
        <Form onSubmit={submmitHandler} className="col-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            {userData.password?.length > 1 && (
              <p textcolor="red">email debe ser un formato valido</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              minLength={6}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {userData.password?.length < 6 && userData.password.length > 1 && (
              <Alert variant={'warning'}>
                password debe tener 6 caracteres al menos
              </Alert>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <GoogleLoginButton onClick={handleGoogleSingin} />
        </Form>
      </div>
      <br />
      <br />
      <br />
      <div>.</div>
    </>
  )
}
