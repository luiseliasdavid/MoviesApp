

export  const handleChange = ({ target: { name, value } },setUserData,userData) => {
    setUserData({ ...userData, [name]: value })
  }