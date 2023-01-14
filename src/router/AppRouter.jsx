import { Route, Routes } from 'react-router-dom'
import { useAddOrRemoveFavs } from '../Hooks/useAddOrRemoveFavs'
import{ Footer, Header, Resultados, ProtectedRoute} from '../movies-app/components'
import {Contacto, Detalle, Favoritos, Listado, Login, Register} from '../movies-app/pages'


export const AppRouter = () => {
  let { favorites, addOrRemoveFromFavs } = useAddOrRemoveFavs()

  return (
    <div className="container">
      <Header favorites={favorites} />
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
        />
        <Route
          path="/listado"
          element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
        />
        <Route path="/detalle" element={<Detalle />} />
        <Route
          path="/resultados"
          element={<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs} />}
        />
        <Route
          path="/favoritos"
          element={
            <Favoritos
              favorites={favorites}
              addOrRemoveFromFavs={addOrRemoveFromFavs}
            />
          }
        />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </div>
  )
}
