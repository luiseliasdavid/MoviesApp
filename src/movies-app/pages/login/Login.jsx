import { useNavigate } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { useAuth } from '../../../authContext/authContext'
import { loginSubmmitHandler } from '../helpers/loginSubmmitHandler'
import { handleGoogleSingin } from '../helpers/handleGoogleSingin'
import { handleChange } from '../helpers/handleChange'
import { useUserDataAndError } from '../../../Hooks/useUserDataAndError'

export const Login = () => {
  let { userData, setUserData, error, setError } = useUserDataAndError()

  const navigate = useNavigate()

  const { login, loginWithGoogle } = useAuth()

  return (
    <>
      {error && <p> {error} </p>}
      <h2>Formulario de login</h2>
      <div className="row">
        <Form
          onSubmit={(e) =>
            loginSubmmitHandler(e, setError, userData, login, navigate)
          }
          className="col-3"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={(e) => handleChange(e, setUserData, userData)}
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
              onChange={(e) => handleChange(e, setUserData, userData)}
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
          <GoogleLoginButton
            onClick={() => handleGoogleSingin(loginWithGoogle, navigate)}
          />
        </Form>
      </div>
      <br />
      <br />
      <br />
      <div>.</div>
    </>
  )
}
