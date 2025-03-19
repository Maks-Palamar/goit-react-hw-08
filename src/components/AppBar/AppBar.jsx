import React from 'react'
import UserMenu from '../Navigation/UserMenu'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../Navigation/AuthNav'
import css from '../Navigation/Navigation.module.css'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'

const AppBar = () => {

const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <header className={css.header}>
        <Navigation/>
        { isLoggedIn && <UserMenu/> }
        { !isLoggedIn && <AuthNav/> }
    </header>
  )
}

export default AppBar