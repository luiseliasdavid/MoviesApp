import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const  Buscador = () => {
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    const keyword = e.currentTarget.keyword.value.trim()

    if (keyword.length === 0) {
      swal.fire({
        title: 'Tienes que escribir una palabra clave',
      })
    } else if (keyword.length < 4) {
      swal.fire({
        title: 'Tienes que escribir mas de 4 caracteres',
      })
    } else {
      e.currentTarget.keyword.value = ''
      navigate(`/resultados?keyword=${keyword}`)
      window.location.reload(1)
    }
  }

  return (
    <div className="input-group d-flex justify-content-end">
      <Form className="d-flex " onSubmit={submitHandler}>
        <Form.Control
          name="keyword"
          type="search"
          placeholder="Search"
          className="me-6"
          aria-label="Search"
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </div>
  )
}


