import React from 'react'
import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

const Navigation = () => {
  
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      {user && user.name && <> <h3>{user.name}</h3> </>}
      {/* <nav className={css.nav}> */}
          <NavLink to="/" className={({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})}>Home</NavLink>
          <NavLink to="/contacts" className={({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})}>Contacts</NavLink>
          {!isLoggedIn && <>
            <NavLink to="/register" className={({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})}>Register</NavLink>
            <NavLink to="/login" className={({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})}>Login</NavLink>
          </>}
          {isLoggedIn && <>
            <button className={css.logoutBtn} onClick={() => dispatch(logoutThunk())}>Logout</button>
          </>}
      {/* </nav> */}
    </header>
  )
}

export default Navigation