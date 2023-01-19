import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { SwalWrapper } from '../../sweetalert/SwalWraper'

import { validateKeyword } from './helpers/validateSearchKyword'

export const Buscador = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()
    const keyword = e.currentTarget.keyword.value.trim()

    const error = validateKeyword(keyword)

    if (error) {
      return setError(error)
    }
    e.currentTarget.keyword.value = ''
    navigate(`/resultados?keyword=${keyword}`)
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
      {error && <SwalWrapper title={error} />}
    </div>
  )
}
