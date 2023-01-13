import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAddOrRemoveFavs } from '../Hooks/useAddOrRemoveFavs'
import Footer from '../movies-app/components/Footer'
import Header from '../movies-app/components/Header'
import { ProtectedRoute } from '../movies-app/components/ProtectedRoute'
import Resultados from '../movies-app/components/Resultados'
import Contacto from '../movies-app/pages/Contacto'
import Detalle from '../movies-app/pages/Detalle'
import Favoritos from '../movies-app/pages/Favoritos'
import Listado from '../movies-app/pages/Listado'
import Login from '../movies-app/pages/Login'
import Register from '../movies-app/pages/Register'

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
