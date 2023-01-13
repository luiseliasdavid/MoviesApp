import { useAuth } from '../authContext/authContext'
import { Navigate } from 'react-router-dom'

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) return <h3>cargando...</h3>

  if (user) return <Navigate to="/listado" />

  if (!user) return <>{children}</>
}
