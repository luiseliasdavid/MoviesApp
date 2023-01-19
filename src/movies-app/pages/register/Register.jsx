import { useNavigate, Navigate } from 'react-router-dom'
import swal from 'sweetalert2'
import { Form, Button, Alert } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { useAuth } from '../../../authContext/authContext'
import { useUserDataAndError } from '../../../Hooks/useUserDataAndError'
import { handleGoogleSingin } from '../helpers/handleGoogleSingin'
import { registerSubmmitHandler } from '../helpers/registerSummitHandler'
import { handleChange } from '../helpers/handleChange'

export const Register = () => {
  const { user } = useAuth()
  let { userData, setUserData, error, setError } = useUserDataAndError()
  const { singUp, loginWithGoogle } = useAuth()
  const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

  const navigate = useNavigate()

  const { login } = useAuth()

  return (
    <>
      {error && <p> {error} </p>}
      {user && <Navigate to="/listado" />}
      <h2>Formulario de Registro</h2>
      <div className="row">
        <Form
          onSubmit={(e) =>
            registerSubmmitHandler(
              e,
              setError,
              userData,
              swal,
              singUp,
              navigate,
              regexEmail,
              login,
            )
          }
          className="col-3"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            {userData.password.length > 1 &&
              !regexEmail.test(userData.email) && (
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
            {userData.password.length < 6 && userData.password.length > 1 && (
              <Alert variant={'warning'}>
                password debe tener 6 caracteres al menos
              </Alert>
            )}
          </Form.Group>

          <GoogleButton
            onClick={() => handleGoogleSingin(loginWithGoogle, navigate)}
          />
          <br />
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <br />
      <br />
      <br />
      <div>.</div>
    </>
  )
}
