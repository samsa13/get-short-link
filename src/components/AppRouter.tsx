import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { privateRoutes, publicRoutes, } from '../routes'

const AppRouter = () => {

 const { isAuth } = useTypedSelector(state => state.isAuth)
 //const isAuth = false;
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map(route =>

          <Route path={route.path}
            element={<route.component />}
            key={route.path} />

        )
        : publicRoutes.map(route =>
          <Route path={route.path}
            element={<route.component />}
            key={route.path} />
        )}
    </Routes>
  )
}

export default AppRouter
