import swal from 'sweetalert2'
import { useEffect } from 'react'

export const SwalWrapper = ({ title, config = {} }) => {
    
  useEffect(() => {
    swal.fire({
      title,
      ...config
    })
  }, [title, config])

  return null
}