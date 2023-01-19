export const validateKeyword = ({email, password}) => {
    if (email.length === 0 || password.length=== 0) {
      return 'Los campos no pueden estar vacios'
        }
    return null
  }