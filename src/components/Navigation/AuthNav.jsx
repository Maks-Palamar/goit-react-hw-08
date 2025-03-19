import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'

const AuthNav = () => {

  return (
    <div className={css.authNav}>
                  <NavLink to="/register" className={({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})}>Register</NavLink>
                  <NavLink to="/login" className={({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})}>Login</NavLink>
    </div>
  )
}

export default AuthNav