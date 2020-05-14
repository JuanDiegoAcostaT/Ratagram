import React, { useContext, Suspense } from 'react'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar/index'

import { Router, Redirect } from '@reach/router'
import { Home } from './pages/Home'
import { Details } from './pages/Details'
// import { Favorites } from './pages/Favorites'
import { User } from './pages/User'
import { NotRegistered } from './pages/NotRegistered'
import { NotFound } from './pages/NotFound'

import { Context } from './Context'

const Favorites = React.lazy(() => import('./pages/Favorites'))
// Estode arriba es para que la pagina e favs no se cargue cuando estamos en home

// const UserLogged = ({ children }) => {
//   return children({ isAuth: false })
// }
// esto de arriba lo quito porque aqui empezamos a usar la api de context que hace que pasemos props, recomiendo ver el provider en el App.js ó Context.js

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  // ESTO DE ARRIBA SE VA PORQUE YA ESTAMOS OBTENIENDO EL ID POR MEDIO DE RICcH ROUTER Y LO REDIRIGE A LA PAGINA
  const { isAuth } = useContext(Context)

  return (
    // Esto de abajo es para que el react.lazy pueda funcionar y cargue la apgina sin recargar el Favorites
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home exact path='/' />
        <Home exact path='/pet/:categoryId' />
        <Details path='/detail/:detailId' />
        {!isAuth && <NotRegistered path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}

        <Favorites exact path='/favs' />
        <User exact path='/user' />
      </Router>

      <NavBar />
    </Suspense>

  //                          Esta version la uso antes de usar el useContext , LA COLOCO comentada porsi es nescesario algun dia verla
  // <div>

  //   <GlobalStyles />
  //   <Logo />
  //   <Router>
  //     <Home path='/' />
  //     <Home path='/pet/:categoryId' />
  //     <Details path='/detail/:detailId' />
  //   </Router>

  //   <Context.Consumer>
  //     {
  //       ({ isAuth }) =>
  //         isAuth
  //           ? <Router>
  //             <Favorites path='/favs' />
  //             <User path='/user' />
  //           </Router>
  //           : <Router>
  //             <NotRegistered path='/favs' />
  //             <NotRegistered path='/user' />
  //           </Router>

  //     }
  //   </Context.Consumer>
  //   <NavBar />
  // </div>
  )
}
