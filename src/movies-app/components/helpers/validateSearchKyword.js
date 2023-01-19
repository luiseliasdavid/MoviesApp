export const validateKeyword = (keyword) => {
    if (keyword.length === 0) {
      return 'Tienes que escribir una palabra clave'
    } else if (keyword.length < 4) {
      return 'Tienes que escribir mas de 4 caracteres'
    }
    return null
  }