
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../authContext/authContext'

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) return <h3>cargando...</h3>

  if (user) return <Navigate to="/listado" />

  if (!user) return <>{children}</>
}
