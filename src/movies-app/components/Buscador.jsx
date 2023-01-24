import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { SwalWrapper } from '../../sweetalert/SwalWraper'

import { validateKeyword } from './helpers/validateSearchKyword'

export const Buscador = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()
    const keyword = value.trim() 
    
    const error = validateKeyword(keyword)

    if (error) {
      return setError(error)
    }
    setValue('')
    navigate(`/resultados?keyword=${keyword}`)
  }

  const onInputChange = ({ target }) => {
    setValue(target.value)
    console.log(value)
  }

  return (
    <div className="input-group d-flex justify-content-end">
      <Form className="d-flex " onSubmit={submitHandler} aria-label="form">
        <Form.Control
          onChange={onInputChange}
          name="keyword"
          type="search"
          placeholder="Search"
          className="me-6"
          aria-label="Search"
          value={value}
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      {error && <SwalWrapper title={error} />}
    </div>
  )
}
