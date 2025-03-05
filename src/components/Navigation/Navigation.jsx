import React from 'react'
import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
import clsx from 'clsx'

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        {/* <ul className={css.navList}>
          <li className={css.navItem}><NavLink to="/" className={({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})}>Home</NavLink></li>
          <li className={css.navItem}><NavLink to="/register" className={({isActive}) => clsx(css.navLink2, {[css.navLinkActive2]: isActive,})}>Register</NavLink></li>
          <li className={css.navItem}><NavLink to="/login" className={({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})}>Login</NavLink></li>
          <li className={css.navItem}><NavLink to="/contacts" className={({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})}>Contacts</NavLink></li>
        </ul> */}
      </nav>
    </header>
  )
}

export default Navigation