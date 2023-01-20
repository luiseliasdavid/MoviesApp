
export const getEnviroments = () => {
  
    const {
        REACT_APP_API_KEY,
        REACT_APP_AUTH_DOMAIN,
        REACT_APP_PROJECT_ID,
        REACT_APP_STORAGE_BUCKET,
        REACT_APP_MESSAGIN_CENTER_ID,
        REACT_APP_APP_ID,
        REACT_APP_MEASUREMENT_ID,
      } = process.env

      return {
        REACT_APP_API_KEY,
        REACT_APP_AUTH_DOMAIN,
        REACT_APP_PROJECT_ID,
        REACT_APP_STORAGE_BUCKET,
        REACT_APP_MESSAGIN_CENTER_ID,
        REACT_APP_APP_ID,
        REACT_APP_MEASUREMENT_ID,
      }
}
